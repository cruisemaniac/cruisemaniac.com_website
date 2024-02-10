---
title: "DevOps is Hard. And no, its not just about the Tools!"
description: "DevOps is Hard. And no, its not just about the Tools"
date: 2023-11-16T10:19:39+04:00
tags: ["devops", "organizations", "culture"]
categories: ["devops"]
---
# DevOps is Hard. And no, its not just about the Tools!

DevOps is a word that gets thrown around way too much in the software development universe. Tons of promises made - lightning-fast releases, increased collaboration, improved cost efficiency, and boy! Are they the right hook for management!

The path to success as and with a DevOps team is however this long winding road choked with traffic - like a Monday morning on the outer ring road in Bangalore, and just for fun, the governor is also travelling with you! 

This is a challenge that goes far beyond the adoption of tools. Jenkins, AWS, or even Kubernetes isn't going to matter here! Let's break down the challenges of DevOps, covering the cultural, organizational, and, technical obstacles that organizations commonly face.

## Cultural Shift:

As an organization, you do not just do DevOps. It is not merely a set of documents and steps you follow and immediately get results. Its not a red pill!

DevOps in its true purist definition of the word is a cultural shift. DevOps has always been about challenging traditional norms around software developement. It advocates for a collaborative, integrated, feedback loop based approach to software development and operations. The cultural shift involves breaking down the longstanding barriers between development and operations teams, enabling open communication, and instilling a shared sense of responsibility for the entire software delivery lifecycle.

The above paragraph reads exactly like what ChatGPT would say. And I'd not blame you. Perhaps, for once, ChatGPT is right! Read that paragraph again!

> Collaborative, Integrated, closed loop approach to software development and operations.

We're not done yet.

> Breakdown barriers between development and ops teams - enable open communication, shared sense of SDLC responsibilities.

The resistance to this cultural shift can be deeply rooted in organizational habits and structures. Teams accustomed to working in silos may find it challenging to adapt to a more collaborative mindset. Overcoming this resistance requires effective leadership, clear communication, and a commitment to fostering a culture of trust and cooperation.

### Silos:

{{< tweet user="cruisemaniac" id="1414998760472465409" >}}

> Stop the "throw shit over the wall and hope someone catches it" behavior.

Silos prevent collaboration, and the DevOps mindset aims to tear that down. Dismantling silos is easier said than done though! Traditional organizational structures often separate development, operations, and other functions, unfortunately leading to communication gaps and delays. 

If your organization needs a good DevOps strategy, start by opening up those barricades. Every part of the puzzle needs to be visible to every other part. Engineering should know what business wants as outcomes. Business should know what engineering is shipping and Ops is preparing for. The teams could work with specific hats on, but the goals should be aligned. And they should all be aligned towards the northstar that is common across the organization.

Breaking down these silos requires intentional efforts to bridge the gap between different teams - sales, business, product, design, tech and infra. This will be an ongoing process and it demands a sincere commitment to collaboration and a willingness to challenge established processes and the "We've always done things this way" mindset.

### Embracing Failure:

{{< tweet user="cruisemaniac" id="1370981838542364674" >}}

> Fail often, fail fast. Revert faster!

You need to allow your team to fail. Build guards around your entire system so folks have something to fall back on. The first and most important guard in an organization is "Trust". Nothing beats trust in building confidence. Failure of a system, or ergo, a team member is an indication of a failure of process in the team. Fix that first! Do not vilify folks that fail.

The shift from assigning blame to analyzing failures as a collective opportunity for improvement requires a significant mindset shift. Leadership plays the most crucial role in setting the tone for how failure is seen within the organization. Creating an environment where individuals feel safe to experiment, learn, and share their experiences fosters a culture of continuous improvement.

## Organizational Shift:

### Scaling people and thought-trains:

> “That’s why it is good to remind ourselves that in business and in life, the journey, not the destination, is the reward.”
<i>- Verne Harnish</i>

As your business grows, so does the demand on what is expected of you. Stuff that once worked seamlessly for a small, close-knit team may not necessarily scale effectively to an entire organization. Scaling DevOps practices requires an org to constantly revisit its core principles and processes to fit the size and structure of the organization.

This scalability challenge touches upon various aspects, including team structures, communication, process, frameworks, and most importantly tooling (more on that). A successful DevOps implementation at scale requires strategic planning, a willingness to adapt be nimble - even with that massive head-count, and a keen awareness of the unique challenges posed by larger organizational structures.

This is very tightly linked to the skills and knowledge of the team on the floor. Upskilling existing team members and hiring new employees with the right expertise are crucial of a successful DevOps journey. There's a twitter thread on hiring for DevOps that I must link to, but I think after close to 1000 words, I'm bloody tired!

Amyways, moving on - Do remember that skill sets can quickly become obsolete. Always hire for fundamentals. An engineer that was proficient with chef / puppet was in vogue about 7-8 years back. Now, not so much!


## Technical Shift:
Right, the tech part! The fun part!

### Continuous Integration and Continuous Delivery (CI/CD):

This is the heartbeat of the DevOps keyword! Literally every single google search leads you to believe that knowing Jenkins and ansible will make you king! Things couldnt be further from the truth.

The premise of DevOps however is - The promise of a streamlined development process, faster, reliable shipping of software using means such as, but not limited to - continuous integration and continuous delivery. While the benefits are evident, the implementation of CI/CD is not without its challenges.

Pipelines aren't the do all end all of DevOps.. They are a cog in the wheel. What you're required to focus on is to adapt your team for faster cycles of software development. You write code, you write tests (_this is mandatory_), you build confidence in the software, you make the necessary checks and balances, you push code - and it hits production.

Look up <a href="https://x.com/mipsytipsy" target="_blank">@mipsytipsy</a>'s talk about 15 minute deployments here:

{{< tweet user="mipsytipsy" id="1344271750670868482" >}}

The pipeline part comes right about here.

### Infrastructure as Code (IaC):

Whats the point of automation in your DevOps journey if your infrastructure isnt driven by code? IaC gives you traceability, repeatability and most importantly, the point we spoke earlier - velocity. One additional benefit of using IaC tools is this: confidence. When a configuration file is managed using version control, you know things work, or they dont! This is where you elevete from DevOps engineer on the floor to outright Wizard!

{{< tweet user="cruisemaniac" id="1429873083523866624" >}}

### Tool Overload:

But then, all this thingamagikavoodoo brings its own headaches - death by a thousand papercuts, or in our case - tools!

The DevOps ecosystem can put the javascript ecosystem to shame with the sheer number of tools that can achieve the same thing. Add to the mix the number of ways to deploy your app, and the same tools providing configuration and convention capabilities for each of these providers - that is a mess!

I've always followed one rule - the tool needs to operate as close to the ecosystem as possible. Dont use a tool coz it can do a million things. Pick a tool that can do one thing very well! And master it. Yes, while I dont prefer it personally - I'd say - learn Terraform. Learn CDK if you're working with AWS. Learn Ansible definitely!

But make sure your team doesnt waste time switching tools. Things go haywire very quick at that point!

### Observability and the Feedback loop:

I'm running out out thoughts and words to get here. But yep! Observability and Feedback loop. The quintessential ∞ symbol in the DevOps image all over the internet.

You fix what you observe. And what you observe, but dont need to fix, is noise!

It doesnt matter what tool your team uses for observability. Its all about the same in my opinion when you're starting off. What you need to make sure is effective monitoring and sending that information back to the source so things can change - be it process or code!

One tip I can share is this - Observability should be at three levels:

* Infrastructure level - traffic, containers, ram, cpu etc.
* Application level - Requests per minute, what services are taking how much of the traffic, backlogs in queues, etc.
* Business level - how is a change / deployment impacting org level metrics - NPS score, feedbacks, uptick in user count, etc.

## Fin:

There's enough literature on the internet that can sway your opinion towards DevOps being about the tools. But take my word for it - No tool can help a broken process!
