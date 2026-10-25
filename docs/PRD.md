# POTTO CBT
## Product Requirements Document (PRD)

**Product Name:** Potto CBT  
**Product Category:** Computer-Based Testing and Examination Management System  
**Parent Ecosystem:** Potto  
**Document Type:** Product Requirements Document  
**Version:** 1.0  
**Status:** Proposed Product Specification

---

# 1. Product Overview

## 1.1 What Is Potto CBT?

Potto CBT is a computer-based testing platform designed to help schools create, schedule, administer, mark, and manage digital examinations and assessments.

The platform should replace or complement traditional paper-based examinations by providing a structured digital environment where teachers and examination administrators can prepare questions, configure examination rules, assign tests to students, monitor examination sessions, and review results.

Potto CBT should support different types of computer-based assessments, including classroom tests, continuous assessments, mock examinations, practice tests, entrance examinations, and formal school examinations.

The platform should provide a reliable examination experience across desktop computers, laptops, tablets, and supported mobile devices, with the actual examination experience adapted to the school's requirements.

## 1.2 Product Vision

To make digital examinations more accessible, reliable, efficient, and transparent for schools, teachers, examination administrators, and students.

## 1.3 Product Mission

Potto CBT aims to:

- Simplify the creation and management of computer-based examinations.
- Reduce the time required to mark objective examinations.
- Improve examination administration and monitoring.
- Provide students with a consistent and intuitive testing experience.
- Help teachers analyse examination performance.
- Improve the accuracy and traceability of examination records.
- Connect examination activities to the wider Potto school ecosystem.

## 1.4 Problems Potto CBT Should Solve

Schools may experience several challenges when conducting examinations:

1. Preparing and printing large volumes of examination papers.
2. Spending significant time marking objective questions manually.
3. Managing examination timetables and student eligibility.
4. Preventing unauthorised access to examination questions.
5. Monitoring students during computer-based examinations.
6. Handling interruptions, network failures, and interrupted examination sessions.
7. Calculating scores accurately and consistently.
8. Compiling examination results from different subjects and classes.
9. Identifying examination performance trends.
10. Maintaining reliable examination records and audit trails.

Potto CBT should address these challenges through a secure, well-organised, and scalable examination platform.

---

# 2. Product Objectives

## 2.1 Digital Examination Management

Enable authorised school staff to create examinations, assign them to students, schedule examination sessions, and manage the complete examination lifecycle.

## 2.2 Automated Marking

Automatically mark supported objective question types using configured answer keys and scoring rules.

## 2.3 Examination Integrity

Protect examination content, enforce examination rules, record relevant activity, and provide tools for supervising examination sessions.

## 2.4 Reliable Examination Delivery

Ensure students can start, complete, and submit examinations reliably, with appropriate handling of network interruptions and unexpected session termination.

## 2.5 Results and Reporting

Calculate examination scores consistently and provide useful reports to authorised teachers and administrators.

## 2.6 Potto Ecosystem Integration

Connect examination records to relevant school, class, subject, student, and academic-session information, while keeping formal academic result processing within its designated Potto service.

---

# 3. User Roles and Permissions

## 3.1 Platform Super Administrator

The platform super administrator manages the overall Potto CBT service.

Responsibilities:

- Manage participating schools and platform access.
- Configure platform-wide examination settings.
- Manage service-level permissions.
- Monitor platform health and examination activity.
- Investigate technical incidents.
- Review audit logs.
- Manage platform support requests.
- Configure shared examination capabilities.

Platform-wide access must follow defined permissions and audit requirements.

## 3.2 School Administrator

The school administrator manages the school's examination environment.

Responsibilities:

- Configure school examination settings.
- Manage examination administrators and authorised teachers.
- Manage examination schedules and school-wide policies.
- View examination activity and reports.
- Approve examinations where required.
- Monitor examination sessions.
- Review examination incidents.
- Manage examination eligibility rules.
- Control result visibility according to school policy.

The school administrator should not automatically be able to alter completed examination scores without an authorised, traceable process.

## 3.3 Examination Officer

The examination officer manages the operational aspects of examinations.

Responsibilities:

- Create and schedule examination sessions.
- Assign examinations to classes or eligible students.
- Configure examination dates and durations.
- Manage examination access codes where enabled.
- Monitor active examination sessions.
- Handle authorised student interruptions and technical incidents.
- Review examination attendance.
- Manage examination rescheduling.
- Prepare examination reports.

Schools should be able to separate examination administration from ordinary teaching responsibilities.

## 3.4 Teacher

Teachers should be able to:

- Create and maintain question banks.
- Create examinations and practice tests.
- Add questions to examinations.
- Configure scoring rules.
- Set examination duration and availability.
- Assign examinations to permitted classes.
- Preview examinations before publication.
- Monitor student participation where authorised.
- Review automatically marked results.
- Mark questions requiring manual evaluation.
- Release scores where permitted.
- Analyse student and class performance.

Teachers should only access examinations, students, and results within their assigned permissions.

## 3.5 Student

Students should be able to:

- View available and upcoming examinations.
- Read examination instructions.
- Access permitted practice tests.
- Verify their examination eligibility.
- Start an examination during its authorised window.
- Navigate between questions.
- Select or enter answers.
- Mark questions for review.
- View answered and unanswered questions.
- Track the remaining examination time.
- Submit their examination.
- Receive confirmation of successful submission.
- View released results and feedback where permitted.
- Review permitted answer explanations after an examination.

Students must not be able to access restricted questions, answer keys, other students' submissions, or unreleased results.

## 3.6 Invigilator

For schools that require supervised examinations, invigilators should be able to:

- View assigned examination sessions.
- View the list of expected candidates.
- Monitor attendance and session status.
- Confirm student identity using the school's approved process.
- Record examination incidents.
- Request authorised assistance for interrupted sessions.
- Report suspected rule violations.

Invigilators should not have unrestricted permission to edit examination questions or alter student scores.

---

# 4. Core Product Modules

## 4.1 Authentication and Access Control

Potto CBT should provide secure, role-based access to examination functionality.

Required capabilities:

- Secure sign-in and sign-out.
- Password recovery.
- Session management.
- Role-based permissions.
- School-level data isolation.
- User activation and deactivation.
- Examination-specific access controls.
- Secure handling of student examination sessions.

Where the Potto ecosystem already provides authentication, CBT should use an approved shared authentication mechanism where appropriate.

The platform should verify permissions on the server, not rely solely on client-side restrictions.

## 4.2 School and Academic Context

Potto CBT should understand the school context in which an examination takes place.

Relevant records may include:

- School.
- Academic session.
- Class or grade.
- Subject.
- Student.
- Teacher.
- Examination officer.
- Examination venue or centre, where applicable.

These records should be sourced from the appropriate Potto services when reliable integrations are available.

Examinations should be associated with the appropriate academic context to prevent questions, candidates, and results from being assigned incorrectly.

## 4.3 Question Bank Management

The question bank is a central component of Potto CBT.

Teachers should be able to create, organise, reuse, and maintain examination questions.

Each question should support relevant metadata, including:

- Question text.
- Question type.
- Subject.
- Topic or curriculum area.
- Class or grade level.
- Difficulty level.
- Marks or score value.
- Answer options, where applicable.
- Correct answer or marking criteria.
- Explanation or feedback.
- Associated image, diagram, or other media.
- Question status.
- Question creator and update history.

### Supported question types

The initial release should support:

**Multiple Choice**

Students select one correct answer from a list of options.

**Multiple Select**

Students select more than one correct answer.

**True or False**

Students determine whether a statement is correct.

**Fill in the Blanks**

Students provide missing words or values, using configured answer-matching rules.

**Short Answer**

Students enter a brief response. Depending on the marking rules, answers may require manual review.

**Essay or Long Answer**

Students submit longer written responses that require teacher marking or an approved rubric.

Additional question types, such as matching, ordering, and numeric responses, may be introduced in later releases.

### Question bank operations

Teachers should be able to:

- Create questions.
- Edit questions.
- Duplicate questions.
- Archive outdated questions.
- Search and filter questions.
- Organise questions by subject and topic.
- Filter by question type and difficulty.
- Preview questions.
- Select questions for examinations.
- Reuse questions across different examinations.
- Import questions through a supported template.
- Export permitted question-bank data.

Questions already used in completed examinations should not be silently changed in a way that alters historical examination records. The system should preserve the question version used for each examination attempt.

## 4.4 Examination Creation

Authorised users should be able to create an examination with the following information:

- Examination title.
- Description.
- Subject.
- Class or candidate group.
- Academic session.
- Examination type.
- Instructions.
- Examination duration.
- Total marks.
- Pass mark, where applicable.
- Start and end dates.
- Examination availability window.
- Question selection method.
- Result visibility settings.
- Publication status.

### Examination types

Potto CBT should support different examination categories, such as:

- Practice tests.
- Class tests.
- Continuous assessment.
- Mock examinations.
- Midterm examinations.
- End-of-term examinations.
- Entrance examinations.
- Other school-defined assessments.

The examination category should help with organisation and reporting without forcing every school to follow the same assessment structure.

### Examination statuses

An examination may have the following statuses:

- Draft.
- Pending approval.
- Scheduled.
- Published.
- In progress.
- Completed.
- Results pending.
- Results released.
- Cancelled.
- Archived.

The system should enforce valid status transitions and prevent students from accessing unpublished or unauthorised examinations.

## 4.5 Examination Configuration

Teachers and examination officers should be able to configure the examination rules before publication.

Supported settings should include:

- Examination duration.
- Start time and end time.
- Candidate eligibility.
- Number of attempts.
- Question navigation rules.
- Question randomisation.
- Answer-option randomisation.
- Whether students can revisit previous questions.
- Whether unanswered questions are permitted at submission.
- Whether negative marking applies.
- Whether calculators or other resources are permitted.
- Whether scores are shown immediately or released later.
- Whether explanations are visible after submission.
- Whether the examination requires invigilator supervision.

Each examination should have a clear summary of its settings before publication.

Changing important settings after students have started should require appropriate permissions and safeguards.

## 4.6 Examination Scheduling

Potto CBT should provide an examination scheduling interface.

Authorised users should be able to:

- Schedule examinations for a specific date and time.
- Assign examinations to eligible classes or groups.
- View upcoming examinations.
- Identify scheduling conflicts.
- Reschedule examinations where permitted.
- Cancel examinations with an appropriate reason.
- View examinations that are currently active or completed.

The system should use a consistent school-local time zone and display examination times clearly.

It should prevent accidental publication of an examination with missing questions, invalid scoring rules, or an unavailable examination window.

## 4.7 Student Examination Dashboard

Students should have a dashboard that displays examinations relevant to them.

The dashboard should include:

- Upcoming examinations.
- Available examinations.
- Active examination sessions.
- Completed examinations.
- Submission status.
- Examination duration.
- Start and end times.
- Examination instructions.
- Released scores where permitted.

Each examination should clearly indicate its current state.

For example:

- Upcoming.
- Available to start.
- In progress.
- Submitted.
- Completed.
- Results released.

Students should not see examinations assigned exclusively to other classes or candidate groups.

## 4.8 Examination Instructions and Candidate Verification

Before starting an examination, the student should see:

- Examination title.
- Subject.
- Duration.
- Number of questions, where applicable.
- Total marks.
- Examination rules.
- Permitted resources.
- Submission instructions.
- Relevant access requirements.

The student should explicitly confirm readiness before the examination begins.

Where required, the school may enable an access code, invigilator confirmation, or another approved candidate-verification mechanism.

Identity verification requirements should be proportionate to the examination and should not collect unnecessary personal information.

## 4.9 Examination Interface

The examination interface should be one of the most carefully designed parts of Potto CBT.

It should provide a distraction-free environment focused on answering questions accurately and submitting work reliably.

### Required interface components

- Examination title and subject.
- Countdown timer.
- Current question number.
- Total question count.
- Question content and supporting media.
- Answer options or response field.
- Previous and next navigation.
- Question navigation panel.
- Answered and unanswered indicators.
- Mark-for-review functionality.
- Save status indicator.
- Submit examination button.

### Question navigation

Students should be able to identify:

- Questions already answered.
- Questions not yet answered.
- Questions marked for review.
- Their current question.

If the examination is configured for sequential navigation, the interface should enforce that rule.

### Timer

The countdown should reflect the authoritative server-side examination deadline.

The system should not rely solely on the student's browser clock to determine whether an examination is still valid.

When time expires, the system should follow the configured examination policy, normally finalising the student's latest successfully saved answers and recording the submission.

### Answer saving

The system should save responses reliably, preferably through automatic saving as students answer questions.

Students should receive clear feedback when responses are saved or when a network problem prevents synchronisation.

The platform should minimise the risk of losing answers after refreshing a page, reconnecting to the network, or experiencing a temporary interruption.

### Submission confirmation

Before submission, the system should summarise unanswered questions and ask the student to confirm submission where appropriate.

After successful submission, the student should receive confirmation and should not be able to change answers unless an explicitly authorised process allows it.

## 4.10 Examination Session Management

Each student attempt should be represented by a distinct examination session.

A session should record relevant information such as:

- Candidate and examination identifiers.
- Session start time.
- Last activity time.
- Submission time.
- Session status.
- Answers and their save status.
- Remaining authorised time.
- Relevant technical interruptions.
- Submission confirmation.

Possible session statuses include:

- Not started.
- In progress.
- Submitted.
- Timed out.
- Interrupted.
- Under review.
- Invalidated through an authorised process.

The platform should handle repeated requests and network retries safely so that they do not create duplicate attempts or duplicate submissions.

## 4.11 Network Interruption and Recovery

Network reliability is particularly important in environments where students may have unstable internet access.

Potto CBT should:

- Save responses frequently.
- Detect connection interruptions.
- Inform students when answers cannot be synchronised.
- Retry failed saves safely.
- Restore the latest successfully saved answers after reconnection.
- Preserve the original examination deadline.
- Record relevant interruptions for authorised review.
- Prevent duplicate submissions during recovery.

Offline examination delivery may be considered as a separate advanced capability. It should not be advertised as supported unless secure local storage, synchronisation, and conflict handling have been implemented and tested.

## 4.12 Examination Monitoring and Invigilation

For supervised examinations, authorised staff should have access to a monitoring dashboard.

The dashboard should display:

- Examination sessions.
- Expected candidates.
- Candidates who have started.
- Candidates who have submitted.
- Candidates with interrupted sessions.
- Remaining time where relevant.
- Reported incidents.
- Candidates requiring assistance.

Invigilators should be able to record incidents such as:

- Candidate absence.
- Technical failure.
- Authorised session restart.
- Examination-room disruption.
- Suspected violation of examination rules.

Each incident should include a timestamp, relevant candidate or session, description, and staff member responsible.

### Examination integrity

The system may implement proportionate safeguards, including:

- Randomised question order.
- Randomised answer-option order.
- Question pools.
- Server-side timing.
- Restricted examination access.
- Controlled session resumption.
- Audit logs.
- Configurable navigation restrictions.

Browser-based restrictions should not be described as guaranteeing that cheating is impossible. Potto CBT should communicate the limits of technical controls and support school-led examination policies.

Any future webcam monitoring, screen monitoring, or biometric verification should require a separate privacy, security, legal, and operational assessment.

## 4.13 Automatic Marking Engine

Potto CBT should calculate scores consistently according to the examination's configured marking rules.

### Automatic marking

The system should automatically mark supported objective questions, including:

- Multiple choice.
- Multiple select.
- True or false.
- Configured fill-in-the-blank questions.
- Other supported objective question types.

### Manual marking

Questions requiring judgement, extended writing, or subjective evaluation should be placed in a manual marking queue.

Teachers should be able to:

- Review a student's answer.
- View the question and marking criteria.
- Award marks within the permitted range.
- Add feedback.
- Save a draft score.
- Submit the mark for finalisation.

### Scoring rules

The marking engine should support:

- Marks per question.
- Partial credit where configured.
- Negative marking where explicitly enabled.
- Unanswered-question rules.
- Question-specific scoring.
- Examination-level score calculation.
- Configured pass marks.
- Score conversion where applicable.

The system should retain sufficient detail to explain how a final score was calculated.

Marking rules should be fixed for an examination attempt once the examination begins, except through a controlled and audited administrative process.

## 4.14 Results Management

After an examination is submitted, Potto CBT should calculate the available score and track its review and release status.

Results should distinguish between:

- Automatically marked.
- Awaiting manual marking.
- Awaiting review.
- Finalised.
- Released.

The platform should support configurable result release policies.

For example, a practice test may show its score immediately, while a formal examination may withhold scores until teachers have reviewed the results.

Students should only see scores that have been authorised for release.

## 4.15 Examination Reports and Analytics

Potto CBT should provide useful reporting tools for teachers and authorised administrators.

### Student-level reports

Reports may include:

- Candidate name or identifier.
- Examination taken.
- Score achieved.
- Total available marks.
- Percentage score.
- Pass or fail status where configured.
- Submission time.
- Time taken.
- Question-level performance where authorised.

### Class-level reports

Reports should include:

- Number of eligible candidates.
- Number of candidates who started.
- Number of completed submissions.
- Number of absentees where recorded.
- Average score.
- Highest and lowest scores.
- Pass rate where applicable.
- Score distribution.
- Questions with unusually high error rates.

### Subject-level analysis

Teachers should be able to identify topics or questions where students performed poorly.

Where questions are mapped to curriculum topics, reports should help educators identify potential learning gaps.

### Exporting reports

Authorised users should be able to export appropriate reports in supported formats, such as CSV, Excel, or PDF.

Exports should respect user permissions and must not expose unrelated schools' or students' records.

---

# 5. Examination Security and Auditability

Security must be a core requirement rather than an optional feature.

## 5.1 Question Security

- Restrict access to unpublished examination content.
- Protect correct answers from student-facing responses.
- Avoid exposing answer keys in client-side application code.
- Use server-side authorisation for question retrieval.
- Control access to exported question banks.
- Preserve historical question versions for completed examinations.

## 5.2 Candidate and Session Security

- Verify candidate eligibility before starting an examination.
- Enforce examination availability and deadlines server-side.
- Restrict access to active examination sessions.
- Prevent unauthorised modification of submitted answers.
- Apply appropriate session expiration and recovery rules.
- Protect student responses during transmission and storage.

## 5.3 Audit Logs

The platform should record important actions, including:

- Examination creation and publication.
- Changes to examination rules.
- Question-bank modifications.
- Examination cancellations and rescheduling.
- Student examination starts and submissions.
- Manual score changes.
- Result releases.
- Session restarts.
- Examination incident reports.

Audit records should identify the actor, action, affected record, timestamp, and relevant reason or context.

Audit logs should be protected from unauthorised modification.

## 5.4 Score Changes

Any authorised score modification after marking should:

- Record the original score.
- Record the new score.
- Identify the authorised user.
- Capture the reason for the change.
- Record the timestamp.
- Preserve the audit history.

Completed examination records should not be silently overwritten.

---

# 6. Integrations With the Potto Ecosystem

Potto CBT should operate as the dedicated examination service within the wider Potto ecosystem.

## 6.1 Potto Admin

Potto Admin should remain the authoritative source for relevant school administration records where that responsibility already exists.

Potential integration includes:

- School records.
- Student records.
- Teacher records.
- Classes and subjects.
- Academic sessions.
- User permissions.

CBT should use these records to assign eligible students to examinations.

## 6.2 Potto Flip

Potto Flip is the proposed teaching and learning layer of the ecosystem.

Potential integration includes:

- Linking course topics to practice examinations.
- Providing revision activities related to lessons.
- Linking students to authorised practice tests.
- Sharing selected assessment information.
- Supporting a transition from lesson completion to practice and examination preparation.

The integration should avoid duplicating course and student records.

## 6.3 Potto Assess

Potto Assess should remain responsible for formal academic result management where that is its established role.

Potential integration includes:

- Transferring approved examination scores.
- Mapping CBT examinations to the appropriate subject and academic session.
- Sharing candidate identifiers and assessment metadata.
- Providing finalised scores for inclusion in the school's academic result workflow.

Scores should only be transferred according to agreed business rules.

The platform should distinguish practice results from official examination marks and should not automatically publish all CBT scores as formal academic results.

## 6.4 Integration Requirements

Integrations should use documented APIs and defined data contracts.

They should include:

- Reliable identifier mapping.
- Permission checks.
- Validation.
- Duplicate prevention.
- Error handling.
- Retry mechanisms.
- Auditability.
- Clear ownership of records.

The actual availability of these integrations must be confirmed against the existing Potto services before implementation.

---

# 7. Notifications and Communication

Potto CBT should notify relevant users about important examination events.

Potential notifications include:

### Students

- Upcoming examinations.
- Examination schedule changes.
- Examination availability.
- Successful submission.
- Released results.
- Authorised examination rescheduling.

### Teachers

- Examination publication.
- New submissions.
- Manual marking requirements.
- Examination completion.
- Unresolved technical incidents.
- Results awaiting release.

### Examination Administrators

- Upcoming examination sessions.
- Examination incidents.
- Unexpected session interruptions.
- Examination completion summaries.
- Results requiring administrative review.

Notifications may be delivered in-app, by email, or through other approved channels.

The system should avoid sending unnecessary duplicate notifications.

---

# 8. Non-Functional Requirements

## 8.1 Performance

The platform should:

- Load examination interfaces quickly.
- Display questions without unnecessary delays.
- Save responses efficiently.
- Handle concurrent examination sessions.
- Support appropriate pagination for large question banks and reports.
- Avoid expensive operations that delay examination submission.

Performance targets should be established through load testing based on the number of concurrent candidates expected for each school or examination.

## 8.2 Reliability

The system should:

- Preserve saved answers.
- Maintain accurate examination deadlines.
- Prevent duplicate submissions.
- Handle network interruptions gracefully.
- Protect examination and result integrity.
- Recover from service interruptions using tested procedures.
- Maintain backups and recovery capabilities.

## 8.3 Scalability

The platform should support growth in:

- Schools.
- Students.
- Teachers.
- Question banks.
- Examinations.
- Concurrent examination sessions.
- Historical results.

Architecture and infrastructure should be tested against realistic peak examination loads.

## 8.4 Accessibility

The examination interface should provide:

- Keyboard navigation.
- Clear question labels.
- Readable typography.
- Sufficient colour contrast.
- Accessible form controls.
- Appropriate support for assistive technologies.
- Clear error messages.

Where examination rules permit, accessibility accommodations such as additional time should be configurable for authorised candidates.

## 8.5 Device Compatibility

The platform should work on supported desktop and laptop browsers, with tablet and mobile compatibility where appropriate.

Formal examinations may use a controlled desktop-oriented interface if required by school policy, but this restriction should be explicit rather than accidental.

## 8.6 Data Privacy

The system should implement appropriate safeguards for student information, examination responses, and results.

It should comply with applicable data protection requirements, including relevant Nigerian data protection obligations.

Data access, retention, exports, and administrative actions should be governed by documented policies.

---

# 9. MVP Scope

The first release should prioritise a complete and dependable examination workflow.

## Phase 1: Core CBT

Required capabilities:

1. Authentication and role-based access.
2. School, class, subject, and student mapping.
3. Question bank management.
4. Multiple-choice and true-or-false questions.
5. Examination creation and configuration.
6. Examination scheduling and publication.
7. Candidate eligibility checks.
8. Student examination dashboard.
9. Countdown timer.
10. Question navigation.
11. Automatic answer saving.
12. Submission confirmation.
13. Automatic marking for supported objective questions.
14. Student results and submission status.
15. Teacher and administrator dashboards.
16. Basic examination reports.
17. Secure question and answer handling.
18. School-level data isolation.
19. Examination audit logs.
20. Reliable handling of interrupted sessions.

## Phase 2: Advanced Examination Management

Introduce:

- Question pools and randomisation.
- Multiple-select and fill-in-the-blank questions.
- Essay and short-answer questions.
- Manual marking workflows.
- Advanced scheduling.
- Invigilator dashboards.
- More detailed analytics.
- CSV, Excel, and PDF exports.
- Improved incident management.
- Expanded Potto ecosystem integrations.

## Phase 3: Advanced Assessment Capabilities

Introduce where justified:

- Advanced question types.
- Configurable examination accommodations.
- More sophisticated question analysis.
- Large-scale concurrent examination optimisation.
- Offline examination capabilities after appropriate security validation.
- Advanced proctoring capabilities following privacy and legal review.
- AI-assisted question drafting.
- AI-assisted marking suggestions with human review.
- Advanced performance analytics.

These phases describe a proposed roadmap, not the existing implementation status of Potto CBT.

---

# 10. Features Outside Potto CBT's Core Responsibility

To keep product responsibilities clear, Potto CBT should not primarily function as:

- A complete learning management system.
- A general-purpose course and lesson publishing platform.
- A school fee collection system.
- A payroll application.
- A complete student admission system.
- A replacement for school administration records.
- The primary formal academic result management system where Potto Assess owns that responsibility.

Potto CBT may integrate with these services to provide a connected experience without duplicating their core functionality.

---

# 11. Success Metrics

Potto CBT should be evaluated using operational and product metrics.

## Adoption

- Number of active schools.
- Number of active examination administrators.
- Number of active teachers.
- Number of candidates using the platform.

## Examination Reliability

- Successful examination start rate.
- Successful answer-save rate.
- Successful submission rate.
- Frequency of interrupted sessions.
- Number of lost-response incidents.
- Examination service availability during scheduled sessions.

## Operational Efficiency

- Time required to create an examination.
- Time required to mark objective examinations.
- Time required to finalise results.
- Number of examination incidents resolved successfully.

## Learning and Assessment

- Candidate participation rate.
- Examination completion rate.
- Distribution of examination scores.
- Question-level performance.
- Frequency of questions requiring correction or review.

## Security and Integrity

- Number of unauthorised access attempts.
- Number of examination incidents.
- Number of unauthorised score changes.
- Completion of required audit records.
- Number of critical examination data-integrity incidents.

Metrics should be interpreted in context and should not treat every interruption or unusual activity as proof of misconduct.

---

# 12. Acceptance Criteria

The initial release should be considered ready when:

1. Authorised teachers can create questions and examinations.
2. Examination administrators can schedule examinations for eligible students.
3. Students can see only examinations available to them.
4. Examination instructions and rules are displayed before starting.
5. The timer follows the authoritative examination deadline.
6. Student answers are saved reliably.
7. Network interruptions are handled without silently discarding saved answers.
8. Students can navigate questions according to the examination settings.
9. Students can submit examinations successfully.
10. Repeated submission requests do not create duplicate attempts.
11. Supported objective questions are marked correctly.
12. Questions requiring manual marking can be reviewed and scored by authorised teachers.
13. Students can see results only when permitted.
14. Teachers can access useful examination reports.
15. Question content and answer keys are protected from unauthorised access.
16. Important administrative and score-changing actions are auditable.
17. Student data is isolated appropriately between schools.
18. The system has been tested against expected concurrent examination traffic.
19. The core examination workflow works on the supported devices and browsers.
20. Any claimed Potto integration has been tested against its documented API and business rules.

---

# 13. Recommended Examination Lifecycle

Potto CBT should manage the examination lifecycle through clearly defined stages:

**Draft → Review → Scheduled → Published → In Progress → Submitted → Marked → Finalised → Results Released → Archived**

Not every examination must use every stage. For example, a practice quiz may be automatically marked and released immediately after submission.

The platform should enforce valid transitions and restrict sensitive actions to authorised roles.

An examination should not be considered fully finalised while required manual marking or review remains incomplete.

---

# 14. Final Product Definition

Potto CBT should be the dedicated computer-based testing platform within the Potto ecosystem.

It should enable schools to prepare examination questions, create and schedule tests, administer digital examinations, save student responses reliably, mark supported question types, supervise examination sessions, and produce accurate assessment reports.

Its central value is providing a reliable, secure, and efficient digital examination experience for schools and their students.

Potto CBT should focus on examination delivery and assessment operations, complement Potto Flip's teaching and learning experience, and connect to Potto Assess for approved formal result processing.

**Potto CBT: Smarter examinations. Reliable assessment. Better insights.**
