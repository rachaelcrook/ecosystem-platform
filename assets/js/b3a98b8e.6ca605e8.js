(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[7874],{14791:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var i=a(87462),n=a(63366),r=(a(67294),a(3905)),o=a(93456),l=["components"],s={id:"fxa-dev-process",title:"Development Process",sidebar_label:"Development Process"},u=void 0,p={unversionedId:"fxa-engineering/fxa-dev-process",id:"fxa-engineering/fxa-dev-process",isDocsHomePage:!1,title:"Development Process",description:'We develop and deploy on a two-week cycle. Every other Thursday we cut a release "Train" (ie. a Sprint) that goes through deployment to stage and into production.',source:"@site/docs/fxa-engineering/fxa-dev-process.md",sourceDirName:"fxa-engineering",slug:"/fxa-engineering/fxa-dev-process",permalink:"/ecosystem-platform/fxa-engineering/fxa-dev-process",editUrl:"https://github.com/mozilla/ecosystem-platform/edit/main/website/docs/fxa-engineering/fxa-dev-process.md",tags:[],version:"current",frontMatter:{id:"fxa-dev-process",title:"Development Process",sidebar_label:"Development Process"},sidebar:"docs",previous:{title:"Coupons",permalink:"/ecosystem-platform/platform/sub-plat/sub-plat-coupons"},next:{title:"Work Breakdown Process",permalink:"/ecosystem-platform/fxa-engineering/fxa-work-breakdown-process"}},d=[{value:"Our weekly process",id:"our-weekly-process",children:[]},{value:"Product Planning",id:"product-planning",children:[]},{value:"Issue management",id:"issue-management",children:[{value:"New Features",id:"new-features",children:[]},{value:"Sprints",id:"sprints",children:[]},{value:"Labels we use",id:"labels-we-use",children:[]},{value:"Bug Triage",id:"bug-triage",children:[]}]},{value:"Estimation and Point Values",id:"estimation-and-point-values",children:[]},{value:"Checkin Meetings",id:"checkin-meetings",children:[]},{value:"Developing on a long running branch",id:"developing-on-a-long-running-branch",children:[]},{value:"Code Review",id:"code-review",children:[{value:"Review Checklist",id:"review-checklist",children:[]}]},{value:"Browser Support",id:"browser-support",children:[]},{value:"Deployment Documentation",id:"deployment-documentation",children:[]},{value:"Security issues",id:"security-issues",children:[{value:"Filing security issues",id:"filing-security-issues",children:[]},{value:"Making a private point-release",id:"making-a-private-point-release",children:[]}]}],c={toc:d};function h(e){var t=e.components,s=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'We develop and deploy on a two-week cycle. Every other Thursday we cut a release "Train" (ie. a Sprint) that goes through ',(0,r.kt)("a",{parentName:"p",href:"/ecosystem-platform/fxa-engineering/release-process"},"deployment to stage and into production"),"."),(0,r.kt)("h2",{id:"our-weekly-process"},"Our weekly process"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A visual map of our weekly process",src:a(55877).Z})),(0,r.kt)("p",null,"Above is a diagram illustrating the high level FxA development process.  It does not represent all the work each group does, nor does it show every group that is critical to shipping Firefox Accounts.  It's intention is to give an idea of timeframes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sprints are offset from production pushes by a week.  This gives a finished sprint time to be tested in Staging before going live."),(0,r.kt)("li",{parentName:"ul"},"Fixing regressions of the train on Stage is a higher priority than fixing new issues in the current train.  Depending on the regression's severity it may be picked to Stage, picked to Production, or just ride the train the following week.")),(0,r.kt)("h2",{id:"product-planning"},"Product Planning"),(0,r.kt)("p",null,"Product-level feature planning is managed via Epics in Jira.  Each feature goes through a comprehensive series of steps from defining and designing, to building and QA, to measuring changes and results, and finally closing the Epic."),(0,r.kt)("p",null,"We maintain boards for where our epics are in that life-cycle.  See what ",(0,r.kt)("a",{parentName:"p",href:"https://jira.mozilla.com/secure/RapidBoard.jspa?rapidView=360&projectKey=FXA"},"Firefox Accounts")," or ",(0,r.kt)("a",{parentName:"p",href:"https://jira.mozilla.com/secure/RapidBoard.jspa?rapidView=808"},"Subscription Platform")," is working on now."),(0,r.kt)("h2",{id:"issue-management"},"Issue management"),(0,r.kt)("p",null,"Most of our work takes place on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa"},"GitHub")," and ",(0,r.kt)("a",{parentName:"p",href:"https://jira.mozilla.com/projects/FXA/issues/"},"Jira"),"."),(0,r.kt)("p",null,"Issue status is reflected by the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The issue itself will have updates indicating ",(0,r.kt)("em",{parentName:"li"},"what")," the next action is."),(0,r.kt)("li",{parentName:"ul"},"The assignee, if any, indicates ",(0,r.kt)("em",{parentName:"li"},"who")," is responsible for that action."),(0,r.kt)("li",{parentName:"ul"},"The Sprint (in Jira) indicates ",(0,r.kt)("em",{parentName:"li"},"when")," we are working on the issue."),(0,r.kt)("li",{parentName:"ul"},"The Points (in Jira) indicate roughly ",(0,r.kt)("em",{parentName:"li"},"how complex")," the issue is.")),(0,r.kt)("p",null,"Issues, labels, and assignee are synchronized automatically between GitHub and Jira (a delay of a minute or two)."),(0,r.kt)("p",null,"We also have two relevant components in Bugzilla:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bugzilla.mozilla.org/buglist.cgi?list_id=15068002&resolution=---&classification=Client%20Software&classification=Developer%20Infrastructure&classification=Components&classification=Server%20Software&classification=Other&query_based_on=Firefox%3A%3AFirefoxAccounts&query_format=advanced&component=Firefox%20Accounts&product=Firefox&known_name=Firefox%3A%3AFirefoxAccounts"},"Firefox :: Firefox Accounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bugzilla.mozilla.org/buglist.cgi?list_id=15067999&resolution=---&classification=Client%20Software&classification=Developer%20Infrastructure&classification=Components&classification=Server%20Software&classification=Other&query_based_on=CloudServices%3A%3AServer%3AFirefoxAccounts&query_format=advanced&component=Server%3A%20Firefox%20Accounts&product=Cloud%20Services&known_name=CloudServices%3A%3AServer%3AFirefoxAccounts"},"Cloud Services :: Server: Firefox Accounts"))),(0,r.kt)("p",null,"These components are used to help coordinate between other projects using Bugzilla and for issues relating to security."),(0,r.kt)("p",null,"If you're wondering where to file a bug, unless it's a security bug, please file in Jira."),(0,r.kt)("h3",{id:"new-features"},"New Features"),(0,r.kt)("p",null,"New features are expected to be described thoroughly in an Epic with a description, acceptance criteria, and eventually supporting Tasks filed under it."),(0,r.kt)(o.Mermaid,{chart:"graph TD\nA[Epic] --\x3e B(Task)\nA --\x3e C(Task)\nA --\x3e D(Task)\nA --\x3e E(Bug)",mdxType:"Mermaid"}),(0,r.kt)("p",null,"Generally, we can expect Epics to be written by the Product team.  Tasks will likely be written by the Product and Engineering teams as they need to be broken down small enough to fit inside of a sprint.  ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1zepsrOiHINBMS3TJ8nFDJ4gf8u6kRONe1hdMDnlyZvI/edit"},"Learn more about user stories"),"."),(0,r.kt)("p",null,"As Tasks and Bugs pop up, they should be associated with open Epics as appropriate."),(0,r.kt)("p",null,"When a task is in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Ready for Engineering")," column, it's expected that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://jira.mozilla.com/projects/PI/issues/"},"PI Ticket")," has been filed"),(0,r.kt)("li",{parentName:"ul"},"If there are interesting security changes, the security team has been notified"),(0,r.kt)("li",{parentName:"ul"},"If there are significant string changes, the L10n team has been notified"),(0,r.kt)("li",{parentName:"ul"},"Appropriate metrics have been documented and will be implemented (ie. How will we know this is a success?)")),(0,r.kt)("h3",{id:"sprints"},"Sprints"),(0,r.kt)("p",null,"Sprints are tracked in Jira.  There is a ",(0,r.kt)("a",{parentName:"p",href:"https://jira.mozilla.com/secure/Dashboard.jspa?selectPageId=11006"},"dashboard for our current sprint")," and a ",(0,r.kt)("a",{parentName:"p",href:"https://jira.mozilla.com/secure/RapidBoard.jspa?rapidView=359&projectKey=FXA"},"detailed view of our current sprint"),"."),(0,r.kt)("p",null,"The amount of work we can accomplish in a sprint depends on how many people are on the team, how much time those people can devote to the work, and what type of work it is.  Our ",(0,r.kt)("a",{parentName:"p",href:"https://jira.mozilla.com/secure/RapidBoard.jspa?projectKey=FXA&rapidView=359&view=reporting&chart=velocityChart"},"historical velocity is tracked"),", but past performance is no guarantee of future results."),(0,r.kt)("p",null,"When considering what you can accomplish in a sprint, remember:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"FxA is a complex project with a lot of moving parts.  If you're not familiar with the area, sometimes a simple patch can lead to a rabbit hole that soaks up your time."),(0,r.kt)("li",{parentName:"ul"},"All patches are reviewed by another team member who also has their own obligations that sprint.  Leave room in your schedule to review patches and consider that others might not get to your patch immediately."),(0,r.kt)("li",{parentName:"ul"},"Some patches may require additional review from, for example, the operations, security, localization, or data steward teams.  If that's the case it may not land in the same sprint it is written in.")),(0,r.kt)("h3",{id:"labels-we-use"},"Labels we use"),(0,r.kt)("p",null,"This isn't a comprehensive list but is a good selection to be aware of.  You should know the synchronization between Jira and Github is a little picky (eg. it won't sync spaces) so some labels will sync slightly differently.  For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"good first issue")," on Github is ",(0,r.kt)("inlineCode",{parentName:"p"},"good-first-issue")," on Jira."),(0,r.kt)("p",null,"We should use these labels any time they apply."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"qa+"),": Critical flow or high chance of regression. QA should focus on testing this issue.  When you use this label ",(0,r.kt)("em",{parentName:"li"},"leave a comment in the issue with context about how to test it"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"qa-"),": This is not something that should be tested by QA"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"regression"),": This used to work and now it doesn't"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"good first issue")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"help wanted"),": Use both of these labels at the same time when you come across an issue that would be good for a contributor."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"skill:*"),": We have some labels like ",(0,r.kt)("inlineCode",{parentName:"li"},"skill:css")," that we use in conjunction with the ",(0,r.kt)("inlineCode",{parentName:"li"},"help wanted")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"good first issue")," labels"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maintenance"),": This is work related to the quality of our code base.  This can often be overlooked if we're focusing on feature work but it's important to make time for improving and maintaining the code."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"needs:*"),": We need input from a team, for example, ",(0,r.kt)("inlineCode",{parentName:"li"},"needs:product")," means we need a product manager.")),(0,r.kt)("h4",{id:"how-do-we-decide-what-to-work-on"},"How do we decide what to work on?"),(0,r.kt)("p",null,"We take input from many sources including our Product Managers, our QA team, our customers (both relying parties and end users), and ourselves.  Usually this input is in the form of issues filed in Jira.  We triage this input (described in ",(0,r.kt)("a",{parentName:"p",href:"#bug-triage"},"Bug Triage"),") to determine what is the most important thing to work on in the next sprint.  There are often special cases and reasons to work on things which may find their way into a sprint but for the most part in each sprint we aim to close, in priority order:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Blocking bugs that have been found in our production site"),(0,r.kt)("li",{parentName:"ul"},"Blocking bugs found in our staging site"),(0,r.kt)("li",{parentName:"ul"},"Any high priority work that we didn't finish in the previous sprint (including helping a team member finish their work)"),(0,r.kt)("li",{parentName:"ul"},"Any in-progress Epics"),(0,r.kt)("li",{parentName:"ul"},"Starting on the next Epic (Epics are in priority order in Jira)")),(0,r.kt)("p",null,"In the midst of our regular process workflow bugs will be reported and found.  If they are important we'll add them to the sprint.  If they are part of an epic we're actively working on, we'll add them to that epic (and thus, they will be closed in short order).  If they aren't a high priority, they'll be put in the backlog.  Occasionally we may take a sprint and work on only bugs to help reduce our backlog."),(0,r.kt)("p",null,"We try to work on things as a team (vs individually).  Having more people work on fewer things means:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It's easier to find a reviewer for code you write (and less context switching for everyone involved)"),(0,r.kt)("li",{parentName:"ul"},"It's easier to find someone with enough context to work through hard questions like architecture design"),(0,r.kt)("li",{parentName:"ul"},"More people will have experience with more areas of the code"),(0,r.kt)("li",{parentName:"ul"},"Epics will be closed out faster")),(0,r.kt)("h3",{id:"bug-triage"},"Bug Triage"),(0,r.kt)("p",null,"Triage owners rotate throughout the team and we assign new triage owners in our meetings.  The triage owner is responsible for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Triaging any new issues in Jira"),(0,r.kt)("li",{parentName:"ul"},"Triaging any new issues in Sentry")),(0,r.kt)("p",null,"The goals of our triage rotation are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Triaging issues, watching Sentry, understanding general user\nsentiment/feedback is a shared team responsibility instead of a burden on 1 or 2 engineers"),(0,r.kt)("li",{parentName:"ul"},"Knowledge sharing of different areas - a triage owner may not be the expert on the topic and would reach out for help and learn from the process."),(0,r.kt)("li",{parentName:"ul"},"Users stay top-of-mind"),(0,r.kt)("li",{parentName:"ul"},"0 untriaged issues by the end of the triage cycle - before handover to the next person",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"But it\u2019s OK to be untriaged before the meeting at the end of the cycle - those issues are discussed and triaged at that meeting.")))),(0,r.kt)("h4",{id:"triage-process"},"Triage Process"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The triage owner updates the team on any significant issues or findings during our usual meetings"),(0,r.kt)("li",{parentName:"ul"},"The triage owner provides a short summary at our team meeting the week following their triage week")),(0,r.kt)("h4",{id:"how-to-triage"},"How to triage"),(0,r.kt)("p",null,"In all cases, a call needs to be made about urgency. It\u2019s fine to not be sure!  If it seems urgent, the issue should remain untriaged, which should force it to be raised in our team meetings."),(0,r.kt)("p",null,"Jira is the canonical source of truth for how we track our own work, but bugs may come in through several other systems that have their own requirements."),(0,r.kt)("h5",{id:"errorsissueswork-requestsetc-reported-in-slack"},"Errors/Issues/Work Requests/etc reported in Slack"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If someone reports something to our team in Slack the 1st person to see and respond should file a bug in Jira and add the link to the slack conversation so we know it will be addressed and not dropped."),(0,r.kt)("li",{parentName:"ul"},'The item is then triaged as normal when you get to "Jira Issues" below.')),(0,r.kt)("h5",{id:"sentry"},"Sentry"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sentry issues which may be of concern should have corresponding issues opened in Jira, with a link to the Sentry report and a brief description. If you are unsure whether a report is of concern or not, assume it is (ie, open an issue\nanyway)."),(0,r.kt)("li",{parentName:"ul"},"We should monitor our production instances closely as well as keep an eye out on stage for new issues exposed by QA.  There are many projects in the #fxa group on Sentry."),(0,r.kt)("li",{parentName:"ul"},"For reports that seem worth following up on, create a corresponding issue in Jira."),(0,r.kt)("li",{parentName:"ul"},'In the right-hand sidebar of the sentry issue, there is a "Link to Github Issue" button. This can be an easy way to file an issue that will eventually be mirrored into Jira.  Otherwise make an issue manually.',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Issues created from this process will then be triaged as normal in Jira.")))),(0,r.kt)("h5",{id:"jira-issues"},"Jira Issues:"),(0,r.kt)("p",null,"All of the steps above should have produced issues that make their way into Jira, so now we can look at an overview of all the things that are our responsibility."),(0,r.kt)("p",null,"Triage ",(0,r.kt)("a",{parentName:"p",href:"https://jira.mozilla.com/secure/RapidBoard.jspa?rapidView=703&view=planning&issueLimit=100"},"this Jira incoming issues query")," - only the issues under \u201cBacklog\u201d need triage."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Some guidance for fields to change:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"New issues default to Tasks, but is this a Bug instead (that is, a defect)?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If it\u2019s a bug, change the ",(0,r.kt)("inlineCode",{parentName:"li"},"Type")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Bug")," and set:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Found In")," field to an appropriate value"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Severity")," field to an appropriate value"))))),(0,r.kt)("li",{parentName:"ul"},"Is it tied to one of the epics we have filed?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Update the ",(0,r.kt)("inlineCode",{parentName:"li"},"Epic Link")," field"))),(0,r.kt)("li",{parentName:"ul"},"Does it require UX guidance?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("inlineCode",{parentName:"li"},"needsux")," as a label"))),(0,r.kt)("li",{parentName:"ul"},"Does it require a Product Manager?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("inlineCode",{parentName:"li"},"needsproduct")," as a label"))),(0,r.kt)("li",{parentName:"ul"},"If it is about improving our code quality add the ",(0,r.kt)("inlineCode",{parentName:"li"},"maintenance")," label."),(0,r.kt)("li",{parentName:"ul"},"Consider adding a helpful comment!")))),(0,r.kt)("p",null,'As you triage the issues move them into "To Do" (or close them).  Repeat for the rest of the issues in the Backlog.'),(0,r.kt)("p",null,"When you\u2019re all finished, write a quick summary including any of the open issues you need help with and put a comment in #fxa-team."),(0,r.kt)("h2",{id:"estimation-and-point-values"},"Estimation and Point Values"),(0,r.kt)("p",null,"Points are assigned to issues in Jira (ideally before starting work \ud83d\ude09) so that we can track our velocity over time, which aids in planning."),(0,r.kt)("p",null,"The goal of estimation is for us to assess the issue in terms of its relative complexity, effort, and doubt. When applying an estimate, we should consider all the steps in getting the particular work to a completed (ready for production) state for our consumer. The should include effort required for code reviews, security reviews, testing, integration and build/deploy."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Points"),(0,r.kt)("th",{parentName:"tr",align:null},"Relative Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Review Time"),(0,r.kt)("th",{parentName:"tr",align:null},"Examples"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"xs"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a trivial change with clearly defined parameters."),(0,r.kt)("td",{parentName:"tr",align:null},"1 engineer needs ~10 minutes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"s"),(0,r.kt)("td",{parentName:"tr",align:null},"A simple change (minimal code changes), where we understand all of the requirements."),(0,r.kt)("td",{parentName:"tr",align:null},"1 engineer needs <1 hour"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"m"),(0,r.kt)("td",{parentName:"tr",align:null},"A simple change, but the code footprint is bigger (e.g. lots of different files, or tests affected). The requirements are clear.",(0,r.kt)("br",null),(0,r.kt)("br",null),"or",(0,r.kt)("br",null),(0,r.kt)("br",null),"This could also represent a 2 point project but there is less certainty about how to achieve it effectively.  ","[Note: what we are achieving should not be in question.]"),(0,r.kt)("td",{parentName:"tr",align:null},"1 engineer needs <2 hours"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"l"),(0,r.kt)("td",{parentName:"tr",align:null},"A more complex change that will impact multiple areas of the codebase, there may also be some refactoring involved. Requirements are understood but you feel there are likely to be some gaps along the way."),(0,r.kt)("td",{parentName:"tr",align:null},"1 engineer needs <3 hours"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"xl"),(0,r.kt)("td",{parentName:"tr",align:null},"A complex change. It will significantly change the codebase and/or business logic. It may require input from others to assure the requirements and impacts are well understood.  It may require coordination with additional teams.",(0,r.kt)("br",null),(0,r.kt)("br",null),"or",(0,r.kt)("br",null),(0,r.kt)("br",null),"This could also represent a 5 point project but there is less certainty about how to achieve it effectively.  ","[Note: what we are achieving should not be in question.]"),(0,r.kt)("td",{parentName:"tr",align:null},"1 engineer needs 1/2 day.  This may require data review or an external team sign-off"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"xxl"),(0,r.kt)("td",{parentName:"tr",align:null},"A significant change that may have dependencies (other teams or third-parties) and we likely still don't understand all of the requirements. It's unlikely we would commit to this in a milestone, and the preference would be to further clarify requirements and/or break in to smaller Issues."),(0,r.kt)("td",{parentName:"tr",align:null},"2 engineers need a few 1/2 days each.  This may require security review or external team sign-offs"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"21"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221e"),(0,r.kt)("td",{parentName:"tr",align:null},"Meta issue or We do not have clear scope. (This issue must be broken down).  This is possibly a whole quarter sized epic."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"checkin-meetings"},"Checkin Meetings"),(0,r.kt)("p",null,"The team meets regularly to stay in sync about development status and ensure nothing is falling through the cracks.  During meetings we take notes in a central document that anyone in the meeting can reference."),(0,r.kt)("p",null,"Please see our ",(0,r.kt)("a",{parentName:"p",href:"https://www.google.com/calendar/embed?src=mozilla.com_urbkla6jvphpk1t8adi5c12kic%40group.calendar.google.com"},"project calendar")," for details."),(0,r.kt)("h2",{id:"developing-on-a-long-running-branch"},"Developing on a long running branch"),(0,r.kt)("p",null,"If a branch will survive beyond a couple of days its important to have a bit of strategy so as to avoid merging frustrations for yourself and your team.  If possible you should use other options like feature flags, but sometimes a branch is the best way to go.  Ask your team if you're unsure.  If you need to use a branch, please keep in mind:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Your team won't be keeping up with what is landing on the branch.  Regular communication and/or demos of where you are at and where you are going can help keep your changes in peoples' minds."),(0,r.kt)("li",{parentName:"ul"},"You should rebase against main often to avoid a giant headache when you eventually merge"),(0,r.kt)("li",{parentName:"ul"},"Consider creating new components instead of editing old ones if you have extensive enough changes.  This way it's a very small change to flip from one to the other instead of trying to merge.")),(0,r.kt)("h2",{id:"code-review"},"Code Review"),(0,r.kt)("p",null,"This project is production Mozilla code and subject to our ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Mozilla/Developer_guide/Committing_Rules_and_Responsibilities"},"engineering practices and quality standards"),".  Every patch must be ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Code_Review_FAQ"},"reviewed")," by an owner or peer of the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.mozilla.org/Modules/Other#Firefox_Accounts"},"Firefox Accounts module"),"."),(0,r.kt)("h3",{id:"review-checklist"},"Review Checklist"),(0,r.kt)("p",null,"Here are some handy questions and things to consider when reviewing code for Firefox Accounts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Did test coverage increase, or at least stay the same?"),(0,r.kt)("li",{parentName:"ul"},"Does it introduce new user-facing strings?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ensure the strings are finalized and approved.  Double check for any typos.  It's hard to change strings once they get localized."),(0,r.kt)("li",{parentName:"ul"},"Ensure they will be extracted by being consistent with the code in the package you're working on."))),(0,r.kt)("li",{parentName:"ul"},"Does it store user-provided data?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The validation rules should be explicit, documented, and clearly enforced before storage."),(0,r.kt)("li",{parentName:"ul"},"Ensure new stored data has been approved by a data steward."))),(0,r.kt)("li",{parentName:"ul"},"Does it display user-controlled data?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"It must be appropriately escaped, e.g. htmlescaped before being inserted into web content."))),(0,r.kt)("li",{parentName:"ul"},"Does it involve a database schema migration?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The changes must be backwards-compatible with the previous deployed version.  This means that you can't do something like ",(0,r.kt)("inlineCode",{parentName:"li"},"ALTER TABLE CHANGE COLUMN")," in a single deployment, but must split it into two: one to add the new column and start using it, and second to drop the now-unused old column."),(0,r.kt)("li",{parentName:"ul"},"Does it contain any long-running statements that might lock tables during deployment?"),(0,r.kt)("li",{parentName:"ul"},"Can the changes be rolled back without data loss or a service outage?"),(0,r.kt)("li",{parentName:"ul"},"Has the canonical db schema been kept in sync with the patch files?"),(0,r.kt)("li",{parentName:"ul"},"Once merged, please update the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1lc5T1ZvQZlhXY6j1l_VMeQT9rs1mN7yYIcHbRPR2IbQ/edit"},"deployment doc")," with details."))),(0,r.kt)("li",{parentName:"ul"},"Does it alter the public API of a service?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ensure that the change is backwards compatible."),(0,r.kt)("li",{parentName:"ul"},"Ensure that it's documented appropriately in the API description."),(0,r.kt)("li",{parentName:"ul"},"Ensure validation functions are tested thoroughly."),(0,r.kt)("li",{parentName:"ul"},"Note whether we should announce it on one or more developer mailing lists."))),(0,r.kt)("li",{parentName:"ul"},"Does it add appropriate new metrics or logging?"),(0,r.kt)("li",{parentName:"ul"},"Does it consider accessibility?")),(0,r.kt)("h2",{id:"browser-support"},"Browser Support"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Last updated: Sep 18, 2020")),(0,r.kt)("p",null,"Firefox Accounts must work in the following environments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Firefox Desktop ESR - 1"),(0,r.kt)("li",{parentName:"ul"},"Firefox for Android ESR - 1"),(0,r.kt)("li",{parentName:"ul"},"Firefox for iOS Current Version"),(0,r.kt)("li",{parentName:"ul"},"Latest versions of modern browsers (Chrome, Safari, Opera, Edge)"),(0,r.kt)("li",{parentName:"ul"},"iOS Current Version (iOS WebView)"),(0,r.kt)("li",{parentName:"ul"},"Android Current Version (Android WebView)")),(0,r.kt)("h2",{id:"deployment-documentation"},"Deployment Documentation"),(0,r.kt)("p",null,"We maintain a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1lc5T1ZvQZlhXY6j1l_VMeQT9rs1mN7yYIcHbRPR2IbQ/edit"},"private deployment document")," to keep track of any configuration changes, any database changes, etc.  ",(0,r.kt)("strong",{parentName:"p"},"Anything that needs to be done aside from deploying updated code should be tracked in this document."),"\nIf your patch needs any additional changes or config you are responsible for putting those notes in this document before the train ends."),(0,r.kt)("p",null,"Additionally, we should notify our relying parties if we're going to change APIs or configuration details if we can (ie. it may not be prudent if we're changing a configuration variable in response to a security incident).  These notifications should be sent to the ",(0,r.kt)("a",{parentName:"p",href:"https://groups.google.com/a/mozilla.com/g/firefox-accounts-notices"},"firefox-accounts-notices group")," with enough time for relying parties to adjust their code or reply with any concerns."),(0,r.kt)("h2",{id:"security-issues"},"Security issues"),(0,r.kt)("p",null,"Since most of our work happens in the open, we need special procedures for dealing with security-sensitive issues that must be fixed in production before being made visible to the public."),(0,r.kt)("p",null,"We use private bugzilla bugs for tracking security-related issues, because this allows us to manage visibility for other stakeholders at Mozilla while maintaining confidentiality."),(0,r.kt)("p",null,"We use private github repos for developing security fixes and tagging security-related releases."),(0,r.kt)("h3",{id:"filing-security-issues"},"Filing security issues"),(0,r.kt)("p",null,"If you believe you have found a security-sensitive issue with any part of the Firefox Accounts service, please file it as confidential security bug in Bugzilla via this link:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bugzilla.mozilla.org/enter_bug.cgi?product=Cloud%20Services&component=Server:%20Firefox%20Accounts&groups=cloud-services-security"},"File a security-sensitive FxA bug"))),(0,r.kt)("p",null,"The Firefox Accounts service is part of Mozilla's ",(0,r.kt)("a",{parentName:"p",href:"https://www.mozilla.org/security/bug-bounty/"},"bug bounty program"),", which provides additional guidelines on ",(0,r.kt)("a",{parentName:"p",href:"https://www.mozilla.org/security/bug-bounty/faq-webapp/#bug-reporting"},"reporting security bugs"),"."),(0,r.kt)("h3",{id:"making-a-private-point-release"},"Making a private point-release"),(0,r.kt)("p",null,"We maintain the following private github repo that can be used for making security-related point-releases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mozilla/fxa-private"},"https://github.com/mozilla/fxa-private"))),(0,r.kt)("p",null,"The recommended procedure for doing so is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check out the private repo, independently from your normal working repo:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git clone git@github.com:mozilla/fxa-private")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cd fxa-private")),(0,r.kt)("li",{parentName:"ul"},"N.B: Do not add it\nas a remote on your normal working repo,\nbecause this increases the risk\nof pushing a private fix to the public repo\nby mistake."))),(0,r.kt)("li",{parentName:"ul"},'Add the corresponding public repo as a remote named "public",\nand ensure it\'s up-to-date:',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git remote add public git@github.com:mozilla/fxa")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git fetch public")))),(0,r.kt)("li",{parentName:"ul"},"Check out the latest release branch and push it to the private repo:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git checkout public/train-XYZ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git push origin train-XYZ")))),(0,r.kt)("li",{parentName:"ul"},"Develop your fix against this as a new branch in the private repo:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git checkout -b train-XYZ-my-security-fix")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git commit -a")),(0,r.kt)("li",{parentName:"ul"},"git push -u origin train-XYZ-my-security-fix`"))),(0,r.kt)("li",{parentName:"ul"},"Submit and review the fix as a PR in the private repo,\ntargetting the ",(0,r.kt)("inlineCode",{parentName:"li"},"train-XYZ")," branch."),(0,r.kt)("li",{parentName:"ul"},"Tag a point release in the private repo, following the release steps",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git checkout train-XYZ; git pull  # ensure we have the merged PR")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"grunt version:patch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git push")))),(0,r.kt)("li",{parentName:"ul"},"Push the tag in order to trigger a CircleCI build:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git push origin v1.XYZ.N")),(0,r.kt)("li",{parentName:"ul"},"N.B: Do not use ",(0,r.kt)("inlineCode",{parentName:"li"},"git push --tags"),"\nas this will not correctly trigger\nthe CircleCI build."))),(0,r.kt)("li",{parentName:"ul"},"File an issue on the public repo\nas a reminder to uplift the fix\nonce it has been deployed to production.")),(0,r.kt)("p",null,"Once the fix has been deployed and is safe to reveal publicly, it can be merged\nback into the public repo by doing the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Push the private train branch to the public repo,\nas a new branch:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git push public train-XYZ:train-XYZ-uplift")))),(0,r.kt)("li",{parentName:"ul"},"Open a PR in the public repo,\ntargeting the public ",(0,r.kt)("inlineCode",{parentName:"li"},"train-XYZ")," branch,\nfor review and merge."),(0,r.kt)("li",{parentName:"ul"},"Push the tag to the public repo:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git push public v1.XYZ.N")))),(0,r.kt)("li",{parentName:"ul"},"Merge the ",(0,r.kt)("inlineCode",{parentName:"li"},"train-XYZ")," branch to main\nfollowing the usual steps to release")))}h.isMDXComponent=!0},11748:function(e,t,a){var i={"./locale":89234,"./locale.js":89234};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=r,e.exports=n,n.id=11748},55877:function(e,t,a){"use strict";t.Z=a.p+"assets/images/fxa-schedule-ac56ebbf238ec7def7cf40f75a7e8d38.png"}}]);