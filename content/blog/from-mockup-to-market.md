---
title: "Taoyuan Smart Streetlight Digital Transformation"
description: Unifying four legacy systems into a single platform through governance and role-based design, serving six user groups and managing 162,000 streetlights.
date: 2025-04-23
image: https://images.pexels.com/photos/1050312/pexels-photo-1050312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
minRead: 8
author:
  name: Emma Thompson
  avatar:
    src: https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
    alt: Emma Thompson
---

Creating successful digital products isn't about following a rigid formula—it's about developing a flexible framework that adapts to the unique challenges of each project. After refining my approach across dozens of products, I've developed a process that consistently delivers results while leaving room for creativity and iteration.

In this article, I'll walk through my end-to-end design process, from initial discovery to developer handoff, using my recent work on the EcoTrack application as a case study.

## Background

The project was implemented under a PFI (Private Finance Initiative) model for a 15-year smart streetlight infrastructure and operations program.

Previously, four independent systems operated in silos, with some processes still paper-based. Starting in 2022, the initiative aimed to rebuild and unify these systems into one cohesive platform, supporting six user types: government, PCM, contractors, on-site teams, maintenance crews, and the public.

I approached this project as a governance cycle—aligning stakeholders, designing institutional mechanisms, and ensuring real-world adoption and validation. The following sections outline the key stages of this process.

## Challenges
1. **Organizational** <br/>
Government, PCM, and dual contractors held different expectations for KPIs, transparency, and accountability—creating a three-way governance tension.
2. **Technical** <br/>
Four legacy systems needed to be refactored into six subsystems with unified data and workflows. The initial requirements exceeded 200 items, with high interdependencies.
3. **Adoption** <br/>
Most users relied heavily on paper-based processes with low digital literacy. Early interviews misidentified administrative staff as field crews, resulting in an overly complex app and low usage rates.

<!-- > "I care about the environment, but I have no idea if using a paper bag is actually better than plastic, or if my reusable water bottle makes any difference." — Interview participant -->

## Actions
1. **Requirements Governance** <br/>
Introduced a tracking and prioritization framework (necessity × impact × cost × consequence of omission) to narrow 200+ items to 120 core requirements, with 47 designated as launch-critical. Remaining features were scheduled in later phases, ensuring functional parity with legacy systems for a smooth transition.
2. **Role-Based Design** <br/>
Defined a three-tier interface structure:
- Decision Layer —  KPIs and system overview
- Operation Layer —  Batch management, dispatch, and reviewoverview
- Field Layer —  One-handed operation, offline support, GPS reporting
Complexity was controlled through access rights and workflow boundaries, preventing interface overload.

3. **Adoption Strategy** <br/>
Applied a “Hybrid → Digital-First → Fully Digital” adoption path, anchored by sign-off–based governance to maintain transparency and dispute resolution at each phase.
Internal teams digitized data and conducted side-by-side training before rollout, reducing resistance and turning “compliance” into voluntary engagement.

4. **Acceptance & Verification** <br/>
Established a “Design Comparison Sheet + Sign-off” mechanism. Any deviation in UI or interaction design required formal approval, which then served as the official basis for acceptance.
This institutionalized approach ensured traceable delivery and consistent quality.

## Execution
1. **Case A｜User Adoption & Workflow Redesign** <br/>
Recognized the distinction between administrative crews and on-site field crews. The app was simplified to minimal reporting (scan hardware, take repair photo, select fault reason), while supporting data entry was completed via web by local staff—enabling hybrid deployment.
2. **Case B｜Institutionalizing Requirements Governance** <br/>
All stakeholders treated the requirement sheet as the single source of truth. Items were categorized as “Must-Deliver / Under Discussion / Post-Launch Optimization,” providing a shared basis for negotiation and making “saying no” procedurally valid.
3. **Case C｜Governed Design Acceptance Loop** <br/>
To address discrepancies between design and final output, a design verification + sign-off loop replaced verbal agreements. This clarified responsibilities across all three parties and significantly reduced acceptance disputes.

## Results
The project achieved not only system integration but also established a digital governance framework across organizations—transforming city operations from reactive maintenance to sustainable smart infrastructure.

1. **Technology & Operations** <br/>
- Integrated 4 systems into one unified platform
- Served 6 user roles, managing 162,000 smart streetlights
- Reduced average repair time from 48 to 15 hours (−69%), achieving 99.7% system uptime
- Standardized permission layers, data consistency, and dispatch workflows
2. **B. Environment & Sustainability** <br/>
- Annual energy savings of NT$153M, reducing 75,000 tons of CO₂ (~70% energy efficiency improvement)
- Became Taiwan’s first 100% smart streetlight city, laying the foundation for future smart city projects
3. **Recognition** <br/>
- National Sustainable Development Award (Government Sector, 2024)
- 20th Golden Thumb Award for Public Infrastructure Participation (Excellence + Innovation Awards)

## Reflections
- **Governance** <br/>
Embedding disagreements into rules and uncertainties into processes creates sustainability beyond personal trust.
- **Research** <br/>
Early misalignment in interview targets taught me that methodological rigor ≠ stakeholder accuracy—only by identifying who truly acts can insights be meaningful.
- **Execution** <br/>
Design quality depends on institutionalized acceptance. To bridge the design–implementation gap, I learned front-end development to strengthen delivery consistency from concept to production.

<!-- 1. **Dashboard** — Personalized overview with immediate impact insights
2. **Daily Tracker** — Simple logging of activities with immediate feedback
3. **Impact Journey** — Visualization of progress over time
4. **Action Center** — Customized recommendations based on user behavior -->
