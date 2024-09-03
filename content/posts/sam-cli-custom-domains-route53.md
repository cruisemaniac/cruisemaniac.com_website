---
title: "Define Custom Domains in AWS SAM with ACM Certificates"
description: "Defining Custom Domains and ACM Certificates using the SAM CLI"
date: 2024-09-03T11:38:34+04:00
tags: ["code", "tech", "aws-sam", "acm", "route53", "aws"]
categories: ["tech"]
---

## Intro
AWS Serverless Application Model or [SAM][1] for short is an Opensource dev tool for building serverless applications on AWS. SAM is a bunch of templates that help defining Infrastructure as Code for serverless applications. Think CloudFormation with shortcuts!

I was recently working on a serverless app and had to deploy an API gateway with SSL Certs. The domain was hosted on Route53 and that means all of this can be managed using SAM.

This blog post is a short set of snippets so I can re-use this should I need to visit the same problem again.

Given a SAM app, a bunch of Lambdas and the API Gateway in place, this is how the code is laid out.

> We will be using DNS to validate the Domain.

### Parameters

We need a few params in the `template.yaml` to get the setup going:

```
Parameters:
  ApiGatewayDomainName:
    Type: String
    Description: Custom domain name for API Gateway

  ZoneId:
    Type: String
    Description: Route53 Zone ID for the domain name

```

The `ApiGatewayDomainName` for lack of a better name is the FQDN that you will use to map the custom domain with the CNAME that AWS provides for your API Gateway when its created.

The `ZoneId` is the Hosted Zone ID in Route53 that shows up under the `Hosted zone details` in the Route53 dashboard.

### Resources

Lets get to the meat of the setup:

```
ACMCertificate:
    Type: AWS::CertificateManager::Certificate
    Properties:
      DomainName: !Ref ApiGatewayDomainName
      ValidationMethod: DNS
      DomainValidationOptions:
      - DomainName: !Ref ApiGatewayDomainName
        HostedZoneId: !Ref ZoneId

BackendApi:
    Type: AWS::Serverless::Api
    Properties:
      Name: !Sub "event-backend-api-${Stage}"
      StageName: !Ref Stage
      Domain:
        DomainName: !Ref ApiGatewayDomainName
        CertificateArn: !Ref ACMCertificate
        BasePath: "/"
        Route53:
         HostedZoneId: !Ref ZoneId

         ...more API cloudformation code here...
```

### Hosted Zones

You can get the list of Hosted Zones from Route53 using the following command:

```
aws route53 list-hosted-zones
```

### Executing

Either a `sam deploy` or a `sam deploy --guided` should get you going with this. If you have a `samconfig.toml` you can do your parameter overrides like this for example:

```
parameter_overrides = "Stage=\"production\" ApiGatewayDomainName=\"api.example.com\" ZoneId=\"Z01234567ABCDE1ABCDE1\""

```

And you're off to the races!

[1]: https://aws.amazon.com/serverless/sam/