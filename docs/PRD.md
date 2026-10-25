# POTTO FLIP

## Product Requirements Document (PRD)

**Product:** PottoFlip
**Product Category:** E-Learning / Learning Management System (LMS)
**Product Suite:** Potto Learning Suite
**Document Type:** Product Requirements Document
**Status:** Proposed Product Specification
**Version:** (not set)

> This is the source of every claim on the marketing site. If the site says
> something this document does not, that is a bug.

---

# 1. Product Overview

## 1.1 What Is PottoFlip?

PottoFlip is an e-learning platform designed to help schools deliver, organise, manage, and monitor digital learning.

It should provide a central environment where teachers can create and distribute learning materials, students can access courses and complete learning activities, and schools can monitor participation and learning progress.

The platform should complement traditional classroom teaching by making educational content accessible digitally and supporting learning beyond the physical classroom.

PottoFlip should serve as the digital teaching and learning layer of the Potto Learning Suite.

While other Potto products may manage school administration, examinations, and formal academic results, PottoFlip should concentrate on the actual teaching and learning process.

## 1.2 Product Vision

To make learning more accessible, engaging, organised, and measurable by giving schools, teachers, and students the digital tools they need to improve educational experiences.

## 1.3 Product Mission

PottoFlip aims to:

- Make digital learning accessible to students and teachers.
- Enable teachers to organise and deliver learning materials efficiently.
- Help students learn at their own pace and monitor their progress.
- Support assignments, practice activities, feedback, and continuous learning.
- Give schools useful insight into learning participation and course completion.
- Connect digital learning with the wider Potto Learning Suite.

## 1.4 The Problem PottoFlip Should Solve

Traditional learning environments can face several challenges:

1. Learning materials are distributed across physical books, messaging applications, printed handouts, and different digital platforms.
2. Students may struggle to access learning materials outside school hours.
3. Teachers may lack a central platform for organising lessons, assignments, and digital resources.
4. Tracking lesson completion and assignment participation can be difficult.
5. Students may not receive timely feedback on their learning activities.
6. Schools may have limited visibility into digital learning engagement.
7. Students who miss classes may find it difficult to catch up.
8. Teachers may struggle to identify topics that students consistently find difficult.

PottoFlip should address these problems through a structured, user-friendly digital learning environment.

---

# 2. Product Objectives

### Objective 1: Digitise Learning Delivery

Provide a platform where teachers can organise courses, publish lessons, upload learning materials, and guide students through a structured learning journey.

### Objective 2: Improve Student Engagement

Give students a clear, interactive environment for accessing courses, studying lessons, completing activities, and reviewing feedback.

### Objective 3: Support Continuous Assessment

Allow teachers to create assignments, quizzes, and practice exercises that help students reinforce what they learn.

### Objective 4: Monitor Learning Progress

Provide visibility into student participation, lesson completion, assignment submissions, and assessment performance.

### Objective 5: Support Different Learning Needs

Enable students to revisit materials, study at their own pace, and access additional learning resources when needed.

### Objective 6: Integrate With Potto

Reduce duplicate data entry by connecting to relevant school, class, student, and teacher records already available in the Potto Learning Suite.

---

# 3. Target Users and Roles

## 3.1 Platform Super Administrator

The platform super administrator manages the overall PottoFlip service.

Responsibilities should include:

- Managing registered schools and their access to Flip.
- Configuring platform-wide settings.
- Managing subscription or entitlement settings if Flip is commercialised separately.
- Monitoring platform health and service usage.
- Managing support requests and platform-level issues.
- Reviewing system audit logs.
- Managing global learning-content policies where applicable.

A platform super administrator should not automatically have unrestricted access to every student's personal data. Access should follow defined permissions and privacy policies.

## 3.2 School Administrator

The school administrator manages the school's learning environment.

Responsibilities should include:

- Managing school access to PottoFlip.
- Configuring learning settings.
- Assigning or approving teachers and course creators.
- Reviewing courses published within the school.
- Managing class and subject associations.
- Viewing school-level learning reports.
- Monitoring course participation and completion.
- Configuring appropriate teacher and student permissions.

Where school information already exists in Potto Admin, Flip should consume the relevant records instead of requiring administrators to recreate them.

## 3.3 Teacher

Teachers are responsible for creating and delivering learning experiences.

They should be able to:

- Create and manage courses.
- Organise courses into modules, topics, and lessons.
- Upload learning materials.
- Add video, audio, text, images, and downloadable documents.
- Assign courses to relevant classes or student groups.
- Create assignments and quizzes.
- Set deadlines and submission rules.
- Review student submissions.
- Grade assignments and provide feedback.
- Monitor student participation and progress.
- Identify students who need additional support.
- Reuse and update previously created learning content.
- Schedule lessons and publish content at appropriate times.

Teachers should only access the classes, students, and learning records permitted by their assigned roles.

## 3.4 Student

Students are the primary learners on the platform.

They should be able to:

- Sign in to their learning account.
- View their enrolled courses.
- Explore course modules and lessons.
- Access available learning materials.
- Watch lessons and read educational content.
- Download permitted resources.
- Resume lessons from where they stopped.
- Complete assignments and quizzes.
- Submit work before deadlines.
- View feedback and released scores.
- Track their learning progress.
- Review completed and outstanding activities.
- Receive notifications about new lessons and upcoming deadlines.
- Ask questions or participate in discussions if those features are enabled.

Students should only access courses and information for which they are authorised.

## 3.5 Parent or Guardian

Parent access should be designed as an optional capability, depending on the school's configuration and the wider Potto Learning Suite.

Parents or guardians may be able to:

- View linked children's learning progress.
- See completed and outstanding assignments.
- Review released grades and teacher feedback.
- Receive important learning notifications.
- Identify subjects or activities where a child may need additional support.

Parents should not be able to change student submissions, edit teacher grades, or access another family's records.

---

# 4. Core Product Modules

## 4.1 Authentication and User Access

PottoFlip should provide secure, role-aware access to the learning environment.

Required capabilities:

- Secure sign-in and sign-out.
- Account recovery and password reset.
- Role-based access control.
- School-aware user access.
- Session management.
- User activation and deactivation.
- Appropriate handling of unauthorised access.
- Account linking where supported by Potto authentication services.

Where the Potto Learning Suite already provides authentication, Flip should use an approved shared authentication mechanism where technically appropriate.

The system should avoid requiring users to maintain unnecessary duplicate accounts across Potto products.

## 4.2 School and Class Context

Flip should recognise the school and academic context of each user.

Relevant information may include:

- School.
- Academic session.
- Class or grade.
- Subject.
- Teacher assignments.
- Student enrolments.
- Learning groups.

The platform should use the authoritative records supplied by the relevant Potto services.

If a student's class changes, the student's course access should be updated according to the school's enrolment rules.

School data must remain isolated. Users from one school must not be able to access another school's private courses, student records, or reports without explicit authorisation.

## 4.3 Course Management

Course management is one of the most important modules in PottoFlip.

Teachers should be able to create a course with:

- Course title.
- Description.
- Cover image.
- Subject or learning category.
- Target class or learner group.
- Course objectives.
- Teacher or course owner.
- Course duration, where applicable.
- Modules and lessons.
- Learning resources.
- Publication status.

Course statuses should include:

- Draft.
- Published.
- Archived.

Teachers should be able to edit drafts, publish approved courses, and archive obsolete content according to school permissions.

A published course should present its modules and lessons in a clear, structured order.

The platform should support course discovery within the scope of the user's school and permissions.

## 4.4 Lesson Management

Each course should contain one or more lessons.

Lessons should support appropriate combinations of:

- Rich text.
- Images and illustrations.
- Video content.
- Audio recordings.
- PDF documents.
- Presentations.
- Downloadable files.
- External learning-resource links.
- Embedded activities where supported.

Teachers should be able to:

- Create lessons.
- Edit lesson content.
- Reorder lessons.
- Save lessons as drafts.
- Publish or schedule lessons.
- Restrict access to lessons based on course enrolment.
- Specify completion requirements where appropriate.

Students should have a distraction-free lesson interface with clear navigation between the previous lesson, current lesson, and next lesson.

The system should preserve learning progress where technically possible so students can resume their work.

## 4.5 Learning Resource Library

Flip should provide a way to manage and reuse learning resources.

Teachers should be able to organise resources by subject, course, topic, or other relevant categories.

The library should support:

- Uploading learning materials.
- Searching and filtering resources.
- Previewing supported file types.
- Downloading permitted materials.
- Reusing resources in multiple lessons.
- Managing resource titles and descriptions.
- Enforcing file-size and file-type restrictions.
- Respecting copyright and content-access permissions.

The platform should use secure file storage and avoid exposing private file URLs unnecessarily.

## 4.6 Assignments

Teachers should be able to create assignments associated with courses, modules, or lessons.

Each assignment should support:

- Title.
- Instructions.
- Attached resources.
- Assigned class or students.
- Start date, if applicable.
- Due date.
- Maximum score or grading rubric.
- Submission format.
- Late-submission rules.
- Publication status.

Students should be able to:

- View assignment instructions.
- Access supporting materials.
- Submit permitted file types or text responses.
- Review submission status.
- Resubmit work when permitted.
- View feedback after it is released.

Teachers should be able to:

- Review submissions.
- Assign grades.
- Provide written feedback.
- Request corrections where appropriate.
- Track missing and late submissions.
- Release grades and feedback.

The system should maintain submission timestamps and an appropriate history of changes.

## 4.7 Quizzes and Practice Activities

PottoFlip should support low-stakes quizzes and practice activities that reinforce learning.

Supported question types should include:

- Multiple choice.
- Multiple select.
- True or false.
- Short answer.
- Fill in the blanks.

Additional question types can be introduced as the product matures.

Teachers should be able to configure:

- Quiz instructions.
- Questions and answer options.
- Correct answers.
- Explanations for answers.
- Marks per question.
- Time limits where appropriate.
- Attempt limits.
- Availability windows.
- Randomised question order where appropriate.
- Automatic grading for supported question types.
- Manual grading for questions requiring teacher review.

Students should be able to take quizzes, submit their answers, and view results according to the teacher's release settings.

Quiz feedback should help students understand concepts rather than simply display a score.

**Scope distinction:** Flip's quizzes should primarily support learning, revision, and continuous practice. Formal computer-based examinations and their specialised administration should remain under Potto CBT where that separation exists.

## 4.8 Student Learning Dashboard

Each student should have a personalised dashboard.

The dashboard should display:

- Enrolled courses.
- Recently accessed courses.
- Continue-learning actions.
- Course completion progress.
- Upcoming assignments.
- Overdue activities.
- Recent feedback and released scores.
- Recently published lessons.
- Relevant announcements.

The dashboard should prioritise the student's next actions instead of overwhelming them with statistics.

A student should be able to select a course and immediately continue learning.

## 4.9 Teacher Dashboard

The teacher dashboard should provide a practical overview of teaching activities.

It should display:

- Courses managed by the teacher.
- Published and draft courses.
- Classes associated with those courses.
- Recent student activity.
- Pending submissions.
- Assignments approaching their deadlines.
- Submissions requiring grading.
- Students who have not participated in expected activities.
- Course completion summaries.

Teachers should be able to navigate from a summary to the relevant course, class, assignment, or student record.

## 4.10 School Administration Dashboard

The school administrator dashboard should provide school-level visibility without duplicating the entire school management system.

It should include:

- Number of active Flip users.
- Courses available within the school.
- Course publication status.
- Learning activity summaries.
- Course participation and completion.
- Assignment completion summaries.
- Teacher activity.
- Reports for relevant classes and subjects.

Reports should be filterable by academic session, class, subject, course, and date range where applicable.

Access to identifiable student information should be restricted according to school policies and user permissions.

## 4.11 Learning Progress and Analytics

PottoFlip should record meaningful learning events, including:

- Course enrolment.
- Lesson access.
- Lesson completion.
- Assignment submission.
- Quiz attempts.
- Quiz scores.
- Teacher feedback.
- Course completion.

The platform should distinguish between opening a lesson and actually completing it.

Completion rules should be configurable where appropriate. For example, a lesson may require the student to complete a specific activity before it is marked complete.

Teachers should be able to identify:

- Students who are progressing well.
- Students who have not started assigned work.
- Lessons with low completion rates.
- Topics where students repeatedly struggle.
- Students who may benefit from additional support.

Analytics should be descriptive and actionable rather than presenting meaningless activity counts.

---

# 5. Additional Features for Future Development

The following capabilities could differentiate PottoFlip, but they should not delay the delivery of the core learning experience.

## 5.1 Notifications

Provide in-app notifications for:

- Newly published lessons.
- New assignments.
- Upcoming deadlines.
- Overdue assignments.
- Released grades.
- Teacher feedback.
- Course announcements.

Email, push, or SMS notifications may be introduced according to user preferences, infrastructure, and cost.

Notifications should be relevant and avoid unnecessary duplication.

## 5.2 Discussion and Teacher Interaction

Where appropriate, courses may support:

- Lesson-specific questions.
- Teacher announcements.
- Course discussions.
- Student questions and responses.
- Moderation tools.
- Reporting inappropriate content.

Schools should be able to control whether student discussions are enabled.

## 5.3 Gamification

Potential capabilities include:

- Learning points.
- Completion badges.
- Study streaks.
- Course milestones.
- Subject challenges.
- Optional class leaderboards.

Gamification should encourage consistency and mastery without publicly exposing sensitive student performance or discouraging learners who need additional support.

## 5.4 AI Learning Assistant

A future AI assistant could help students:

- Understand difficult concepts.
- Receive simpler explanations.
- Generate revision questions.
- Summarise approved learning materials.
- Practise questions related to a lesson.
- Identify topics for additional revision.

Teachers could use AI to draft lesson outlines, generate practice questions, or prepare summaries.

AI-generated material should be reviewed before being published as official school content. The system should protect student information and apply appropriate safeguards for children.

## 5.5 Offline-Friendly Learning

Where technically feasible, students should be able to download selected learning resources for offline use.

The system could later support offline progress tracking and synchronisation when connectivity returns.

Offline support should be introduced with clear conflict-handling and content-security rules.

## 5.6 Certificates and Course Completion

For courses that support completion recognition, Flip may generate course completion certificates.

Certificates should only be issued when the configured completion requirements have been satisfied.

Official academic qualifications and formal school results should not be implied by ordinary course completion certificates.

---

# 6. Learning Workflows

## 6.1 Teacher Creates a Course

1. Teacher signs in.
2. Teacher opens the course management area.
3. Teacher creates a new course.
4. Teacher enters the course details.
5. Teacher adds modules and lessons.
6. Teacher uploads or attaches learning resources.
7. Teacher previews the course.
8. Teacher saves it as a draft or publishes it.
9. The course becomes available to its authorised audience.

Where required, publication should follow the school's approval process.

## 6.2 Student Completes a Lesson

1. Student signs in.
2. Student opens the learning dashboard.
3. Student selects an enrolled course.
4. Student opens a lesson.
5. Student studies the available content.
6. Student completes required learning activities.
7. The platform records relevant progress.
8. The student proceeds to the next lesson.
9. Course progress is updated according to the configured completion rules.

## 6.3 Teacher Creates an Assignment

1. Teacher opens a course or class.
2. Teacher creates an assignment.
3. Teacher provides instructions and supporting resources.
4. Teacher sets submission rules and a deadline.
5. Teacher publishes the assignment.
6. Students receive the assignment according to their notification settings.
7. Students submit their work.
8. The teacher reviews submissions.
9. The teacher provides grades and feedback.
10. Students can review the released feedback.

## 6.4 Teacher Creates a Practice Quiz

1. Teacher creates a quiz.
2. Teacher adds questions and answer options.
3. Teacher configures scoring and availability.
4. Teacher publishes the quiz.
5. Students complete the quiz.
6. The platform automatically grades supported questions.
7. Questions requiring manual grading are sent to the teacher.
8. Results are released according to the configured rules.
9. Teachers use the results to identify learning gaps.

---

# 7. Integration With the Potto Learning Suite

PottoFlip should be designed as a connected product rather than an isolated application.

## 7.1 Potto Admin

**Purpose:** School administration and authoritative school records.

Potential integration:

- School identity and configuration.
- Student and teacher records.
- Class and subject information.
- Academic sessions.
- Relevant user permissions.

Flip should not become a duplicate school-record management system.

## 7.2 Potto Assess

**Purpose:** Formal academic assessment and result management, according to the responsibilities assigned to Assess.

Potential integration:

- Transfer of selected, authorised assessment results.
- Mapping of relevant courses and subjects.
- Controlled sharing of approved marks.
- Synchronisation of appropriate academic context.

Learning activity scores should not automatically become official academic results without a defined school-approved workflow.

## 7.3 Potto CBT

**Purpose:** Computer-based testing and formal examination workflows where supported by the product.

Potential integration:

- Linking learning materials to relevant CBT practice or examinations.
- Launching authorised CBT activities.
- Sharing selected results where supported.
- Helping students move from lesson preparation to assessment.

The two products should not unnecessarily duplicate specialised examination functionality.

## 7.4 Other Potto Products

Additional integrations should be considered only when they provide a clear user benefit.

The platform should use documented APIs, consistent identifiers, controlled permissions, and appropriate error handling.

Integration details must be validated against the actual capabilities of the existing Potto services before implementation.

---

# 8. Data and Security Requirements

PottoFlip will process educational records and may serve children. Security and privacy must therefore be fundamental design requirements.

The platform should implement:

- Role-based access control.
- School-level data isolation.
- Secure authentication and session handling.
- Server-side authorisation checks.
- Secure file storage and controlled downloads.
- Input validation and sanitisation.
- Protection against common web application vulnerabilities.
- Appropriate rate limiting.
- Audit logs for important administrative and grading actions.
- Backups and a tested recovery process.
- Data retention and deletion policies.
- Appropriate consent and parental access controls where required.
- Compliance with applicable data protection requirements, including Nigeria's data protection framework where relevant.

Grades, student submissions, and teacher feedback should only be accessible to authorised users.

The system should not expose sensitive student information in public URLs, unrestricted API responses, or client-side code.

---

# 9. Non-Functional Requirements

## Performance

- Pages should load quickly on typical mobile devices.
- Images and learning resources should be optimised.
- Large files should not block unrelated application functionality.
- Long lists should support pagination or appropriate incremental loading.

## Accessibility

- Interfaces should support keyboard navigation.
- Text should have sufficient contrast.
- Forms should have clear labels and validation messages.
- Video content should support captions where available.
- The interface should work with common assistive technologies.

## Responsiveness

The application should work on:

- Desktop computers.
- Laptops.
- Tablets.
- Mobile phones.

Students should be able to access essential learning functions comfortably on smaller screens.

## Reliability

- Progress should be saved reliably.
- Submission failures should be communicated clearly.
- Duplicate submissions should be handled appropriately.
- Integration failures should be logged and recoverable.
- Important learning data should be backed up.

## Maintainability

- Use modular, maintainable architecture.
- Keep business logic separate from presentation.
- Define clear API contracts.
- Apply consistent validation and error handling.
- Include automated tests for critical learning workflows.

---

# 10. MVP Scope and Delivery Priorities

The initial release should focus on making the complete teaching and learning workflow functional.

## Phase 1: Core MVP

Required:

1. Authentication and role-based access.
2. School-aware access and class mapping.
3. Course creation and management.
4. Modules and lesson creation.
5. Text, video, PDF, and other supported learning resources.
6. Student course access.
7. Lesson navigation and progress tracking.
8. Assignment creation and submissions.
9. Basic quizzes and automatic grading.
10. Manual grading and teacher feedback.
11. Student and teacher dashboards.
12. Basic course and student progress reports.
13. Secure resource access and school-level data isolation.

## Phase 2: Enhanced Learning

Introduce:

- Advanced question types.
- Improved analytics.
- Notifications and reminders.
- Course discussions.
- Reusable question banks.
- More detailed teacher reports.
- Parent progress visibility.
- Improved course discovery.
- Expanded integration with Potto services.

## Phase 3: Differentiating Capabilities

Introduce where justified:

- AI learning assistance.
- Personalised revision recommendations.
- Advanced gamification.
- Offline learning and synchronisation.
- Adaptive practice activities.
- Completion certificates.
- Advanced learning analytics.

These phases are proposed priorities, not a statement of existing development status.

---

# 11. Features Outside the Core Scope

To keep PottoFlip focused, the following should not be its primary responsibility:

- Full school fee management.
- Payroll and staff salary administration.
- General school accounting.
- Student admission management.
- Full school record administration.
- Timetable management as a standalone school administration system.
- Dedicated formal examination administration where Potto CBT is responsible.
- Official academic result processing where Potto Assess is responsible.

Flip may consume or share relevant data with these services through approved integrations.

---

# 12. Success Metrics

PottoFlip should be evaluated using measurable product outcomes.

### Adoption

- Number of schools actively using Flip.
- Number of active teachers.
- Number of students accessing courses.
- Percentage of invited users who become active.

### Engagement

- Percentage of enrolled students who start a course.
- Lesson completion rate.
- Assignment submission rate.
- Course participation over time.

### Learning Workflow Efficiency

- Time required for teachers to publish a course.
- Time required to review and grade submissions.
- Percentage of assignments graded within the school's expected timeframe.

### Learning Support

- Percentage of students receiving feedback.
- Reduction in missing assignments.
- Identification and follow-up of students struggling with specific topics.

### Reliability

- Successful lesson and file access rates.
- Successful assignment submission rates.
- Availability of core learning services.
- Number of critical data-integrity incidents.

Learning metrics should be interpreted carefully. Platform engagement alone does not prove that students have improved academically.

---

# 13. Product Acceptance Criteria

The initial release should be considered functionally ready when:

1. Authorised teachers can create and publish courses.
2. Students can access only the courses assigned or made available to them.
3. Teachers can create lessons containing supported learning materials.
4. Students can navigate lessons and have their progress recorded reliably.
5. Teachers can create assignments and receive student submissions.
6. Teachers can grade submissions and release feedback.
7. Teachers can create quizzes with supported question types.
8. Objective questions can be graded automatically.
9. Students can view released grades and feedback.
10. Teachers can view meaningful course participation and completion reports.
11. School-level data isolation is enforced and tested.
12. Unauthorised users cannot access restricted courses, submissions, or grades.
13. The core experience works on mobile and desktop.
14. Important failure scenarios are handled clearly.
15. Any promised integration with another Potto product has been tested against its documented API and business rules.

---

# 14. Final Product Definition

PottoFlip should be the learning environment where teaching content is delivered, students engage with lessons, learning activities are completed, teachers provide feedback, and learning progress becomes visible.

Its core value is bringing learning delivery and participation into one structured digital experience.

The product should prioritise a dependable learning experience first, connect with existing Potto services where appropriate, and introduce advanced capabilities such as AI assistance, personalised learning, and gamification as the platform matures.

**PottoFlip: A connected digital learning experience for schools, teachers, and students.**
