import localVarRequest from 'request';

export * from './accommodationResponse';
export * from './accommodationResponseFailedInner';
export * from './accommodationResponseSuccessfulInner';
export * from './account';
export * from './accountCalendar';
export * from './accountNotification';
export * from './admin';
export * from './anonymousUserDisplay';
export * from './answer';
export * from './appointment';
export * from './appointmentGroup';
export * from './assessment';
export * from './assignment';
export * from './assignmentDate';
export * from './assignmentEvent';
export * from './assignmentExtension';
export * from './assignmentGroup';
export * from './assignmentGroupAttributes';
export * from './assignmentGroupGrade';
export * from './assignmentOverride';
export * from './authenticationEvent';
export * from './authenticationProvider';
export * from './avatar';
export * from './bankEntryItem';
export * from './bankItem';
export * from './basicUser';
export * from './blackoutDate';
export * from './blockEditorTemplate';
export * from './blueprintMigration';
export * from './blueprintRestriction';
export * from './blueprintSubscription';
export * from './blueprintTemplate';
export * from './bookmark';
export * from './calendarEvent';
export * from './calendarLink';
export * from './changeRecord';
export * from './collaboration';
export * from './collaborator';
export * from './columnDatum';
export * from './commMessage';
export * from './communicationChannel';
export * from './completionRequirement';
export * from './conference';
export * from './conferenceRecording';
export * from './contentDetails';
export * from './contentExport';
export * from './contentMigration';
export * from './contentShare';
export * from './conversation';
export * from './conversationParticipant';
export * from './course';
export * from './courseAccommodationRequest';
export * from './courseAttributes';
export * from './courseEpubExport';
export * from './courseEvent';
export * from './courseEventLink';
export * from './courseNickname';
export * from './coursePace';
export * from './courseProgress';
export * from './courseQuizExtension';
export * from './createdEventData';
export * from './customColumn';
export * from './day';
export * from './developerKey';
export * from './developerKeyAccountBinding';
export * from './discussionTopic';
export * from './ePortfolio';
export * from './ePortfolioPage';
export * from './enrollment';
export * from './enrollmentTerm';
export * from './enrollmentTermsList';
export * from './epubExport';
export * from './errorReport';
export * from './exceptionRecord';
export * from './externalFeed';
export * from './externalToolTagAttributes';
export * from './favorite';
export * from './feature';
export * from './featureFlag';
export * from './federatedAttributeConfig';
export * from './federatedAttributesConfig';
export * from './fileAttachment';
export * from './folder';
export * from './grade';
export * from './gradeChangeEvent';
export * from './gradeChangeEventLinks';
export * from './gradeGroup';
export * from './grader';
export * from './grades';
export * from './gradingPeriod';
export * from './gradingPeriodSets';
export * from './gradingRules';
export * from './gradingSchemeEntry';
export * from './gradingStandard';
export * from './group';
export * from './groupCategory';
export * from './groupMembership';
export * from './helpLink';
export * from './helpLinks';
export * from './historyEntry';
export * from './instAccessToken';
export * from './itemProperties';
export * from './jWT';
export * from './latePolicy';
export * from './learningObjectDates';
export * from './license';
export * from './lineItem';
export * from './listLtiRegistrationsResponse';
export * from './lockInfo';
export * from './ltiAssignment';
export * from './ltiLaunchDefinition';
export * from './ltiLaunchSettings';
export * from './ltiLegacyConfiguration';
export * from './ltiLegacyConfigurationExtensionsInner';
export * from './ltiLegacyConfigurationExtensionsInnerSettings';
export * from './ltiOverlay';
export * from './ltiPlacement';
export * from './ltiPlacementLaunchDefinition';
export * from './ltiPlacementOverlay';
export * from './ltiRegistration';
export * from './ltiResourceLink';
export * from './ltiToolConfiguration';
export * from './mediaComment';
export * from './mediaObject';
export * from './mediaTrack';
export * from './migrationIssue';
export * from './migrator';
export * from './modelFile';
export * from './module';
export * from './moduleAssignmentOverride';
export * from './moduleItem';
export * from './moduleItemSequence';
export * from './moduleItemSequenceNode';
export * from './multipleAttemptsSettings';
export * from './namesAndRoleContext';
export * from './namesAndRoleMembership';
export * from './namesAndRoleMemberships';
export * from './namesAndRoleMessage';
export * from './needsGradingCount';
export * from './newQuiz';
export * from './notificationPreference';
export * from './originalityReport';
export * from './outcome';
export * from './outcomeAlignment';
export * from './outcomeGroup';
export * from './outcomeImport';
export * from './outcomeImportData';
export * from './outcomeLink';
export * from './outcomePath';
export * from './outcomePathPart';
export * from './outcomeResult';
export * from './outcomeRollup';
export * from './outcomeRollupLinks';
export * from './outcomeRollupScore';
export * from './outcomeRollupScoreLinks';
export * from './overrideTarget';
export * from './page';
export * from './pageRevision';
export * from './pageView';
export * from './pageViewLinks';
export * from './pairingCode';
export * from './peerReview';
export * from './plannerNote';
export * from './plannerOverride';
export * from './poll';
export * from './pollChoice';
export * from './pollSession';
export * from './pollSubmission';
export * from './proficiency';
export * from './proficiencyRating';
export * from './profile';
export * from './progress';
export * from './provisionalGrade';
export * from './questionFeedback';
export * from './questionItem';
export * from './quiz';
export * from './quizAccommodationRequest';
export * from './quizAssignmentOverride';
export * from './quizAssignmentOverrideSet';
export * from './quizAssignmentOverrideSetContainer';
export * from './quizExtension';
export * from './quizGroup';
export * from './quizIPFilter';
export * from './quizItem';
export * from './quizPermissions';
export * from './quizQuestion';
export * from './quizReport';
export * from './quizSettings';
export * from './quizStatistics';
export * from './quizStatisticsAnswerPointBiserial';
export * from './quizStatisticsAnswerStatistics';
export * from './quizStatisticsLinks';
export * from './quizStatisticsQuestionStatistics';
export * from './quizStatisticsSubmissionStatistics';
export * from './quizSubmission';
export * from './quizSubmissionEvent';
export * from './quizSubmissionQuestion';
export * from './report';
export * from './result';
export * from './resultLinks';
export * from './resultViewSettings';
export * from './role';
export * from './rolePermissions';
export * from './rubric';
export * from './rubricAssessment';
export * from './rubricAssociation';
export * from './rubricCriteria';
export * from './rubricCriterion';
export * from './rubricRating';
export * from './sSOSettings';
export * from './scope';
export * from './score';
export * from './scoreStatistic';
export * from './searchResult';
export * from './section';
export * from './sectionAssignmentOverrideAttributes';
export * from './sectionAttributes';
export * from './sharedBrandConfig';
export * from './sisAssignment';
export * from './sisImport';
export * from './sisImportCounts';
export * from './sisImportData';
export * from './sisImportError';
export * from './sisImportStatistic';
export * from './sisImportStatistics';
export * from './stimulusItem';
export * from './studentAttributes';
export * from './submission';
export * from './submissionComment';
export * from './submissionHistory';
export * from './submissionVersion';
export * from './tab';
export * from './temporaryEnrollmentPairing';
export * from './term';
export * from './termsOfService';
export * from './toolSetting';
export * from './turnitinSettings';
export * from './updatedEventData';
export * from './usageRights';
export * from './user';
export * from './userAssignmentOverrideAttributes';
export * from './userDisplay';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AccommodationResponse } from './accommodationResponse';
import { AccommodationResponseFailedInner } from './accommodationResponseFailedInner';
import { AccommodationResponseSuccessfulInner } from './accommodationResponseSuccessfulInner';
import { Account } from './account';
import { AccountCalendar } from './accountCalendar';
import { AccountNotification } from './accountNotification';
import { Admin } from './admin';
import { AnonymousUserDisplay } from './anonymousUserDisplay';
import { Answer } from './answer';
import { Appointment } from './appointment';
import { AppointmentGroup } from './appointmentGroup';
import { Assessment } from './assessment';
import { Assignment } from './assignment';
import { AssignmentDate } from './assignmentDate';
import { AssignmentEvent } from './assignmentEvent';
import { AssignmentExtension } from './assignmentExtension';
import { AssignmentGroup } from './assignmentGroup';
import { AssignmentGroupAttributes } from './assignmentGroupAttributes';
import { AssignmentGroupGrade } from './assignmentGroupGrade';
import { AssignmentOverride } from './assignmentOverride';
import { AuthenticationEvent } from './authenticationEvent';
import { AuthenticationProvider } from './authenticationProvider';
import { Avatar } from './avatar';
import { BankEntryItem } from './bankEntryItem';
import { BankItem } from './bankItem';
import { BasicUser } from './basicUser';
import { BlackoutDate } from './blackoutDate';
import { BlockEditorTemplate } from './blockEditorTemplate';
import { BlueprintMigration } from './blueprintMigration';
import { BlueprintRestriction } from './blueprintRestriction';
import { BlueprintSubscription } from './blueprintSubscription';
import { BlueprintTemplate } from './blueprintTemplate';
import { Bookmark } from './bookmark';
import { CalendarEvent } from './calendarEvent';
import { CalendarLink } from './calendarLink';
import { ChangeRecord } from './changeRecord';
import { Collaboration } from './collaboration';
import { Collaborator } from './collaborator';
import { ColumnDatum } from './columnDatum';
import { CommMessage } from './commMessage';
import { CommunicationChannel } from './communicationChannel';
import { CompletionRequirement } from './completionRequirement';
import { Conference } from './conference';
import { ConferenceRecording } from './conferenceRecording';
import { ContentDetails } from './contentDetails';
import { ContentExport } from './contentExport';
import { ContentMigration } from './contentMigration';
import { ContentShare } from './contentShare';
import { Conversation } from './conversation';
import { ConversationParticipant } from './conversationParticipant';
import { Course } from './course';
import { CourseAccommodationRequest } from './courseAccommodationRequest';
import { CourseAttributes } from './courseAttributes';
import { CourseEpubExport } from './courseEpubExport';
import { CourseEvent } from './courseEvent';
import { CourseEventLink } from './courseEventLink';
import { CourseNickname } from './courseNickname';
import { CoursePace } from './coursePace';
import { CourseProgress } from './courseProgress';
import { CourseQuizExtension } from './courseQuizExtension';
import { CreatedEventData } from './createdEventData';
import { CustomColumn } from './customColumn';
import { Day } from './day';
import { DeveloperKey } from './developerKey';
import { DeveloperKeyAccountBinding } from './developerKeyAccountBinding';
import { DiscussionTopic } from './discussionTopic';
import { EPortfolio } from './ePortfolio';
import { EPortfolioPage } from './ePortfolioPage';
import { Enrollment } from './enrollment';
import { EnrollmentTerm } from './enrollmentTerm';
import { EnrollmentTermsList } from './enrollmentTermsList';
import { EpubExport } from './epubExport';
import { ErrorReport } from './errorReport';
import { ExceptionRecord } from './exceptionRecord';
import { ExternalFeed } from './externalFeed';
import { ExternalToolTagAttributes } from './externalToolTagAttributes';
import { Favorite } from './favorite';
import { Feature } from './feature';
import { FeatureFlag } from './featureFlag';
import { FederatedAttributeConfig } from './federatedAttributeConfig';
import { FederatedAttributesConfig } from './federatedAttributesConfig';
import { FileAttachment } from './fileAttachment';
import { Folder } from './folder';
import { Grade } from './grade';
import { GradeChangeEvent } from './gradeChangeEvent';
import { GradeChangeEventLinks } from './gradeChangeEventLinks';
import { GradeGroup } from './gradeGroup';
import { Grader } from './grader';
import { Grades } from './grades';
import { GradingPeriod } from './gradingPeriod';
import { GradingPeriodSets } from './gradingPeriodSets';
import { GradingRules } from './gradingRules';
import { GradingSchemeEntry } from './gradingSchemeEntry';
import { GradingStandard } from './gradingStandard';
import { Group } from './group';
import { GroupCategory } from './groupCategory';
import { GroupMembership } from './groupMembership';
import { HelpLink } from './helpLink';
import { HelpLinks } from './helpLinks';
import { HistoryEntry } from './historyEntry';
import { InstAccessToken } from './instAccessToken';
import { ItemProperties } from './itemProperties';
import { JWT } from './jWT';
import { LatePolicy } from './latePolicy';
import { LearningObjectDates } from './learningObjectDates';
import { License } from './license';
import { LineItem } from './lineItem';
import { ListLtiRegistrationsResponse } from './listLtiRegistrationsResponse';
import { LockInfo } from './lockInfo';
import { LtiAssignment } from './ltiAssignment';
import { LtiLaunchDefinition } from './ltiLaunchDefinition';
import { LtiLaunchSettings } from './ltiLaunchSettings';
import { LtiLegacyConfiguration } from './ltiLegacyConfiguration';
import { LtiLegacyConfigurationExtensionsInner } from './ltiLegacyConfigurationExtensionsInner';
import { LtiLegacyConfigurationExtensionsInnerSettings } from './ltiLegacyConfigurationExtensionsInnerSettings';
import { LtiOverlay } from './ltiOverlay';
import { LtiPlacement } from './ltiPlacement';
import { LtiPlacementLaunchDefinition } from './ltiPlacementLaunchDefinition';
import { LtiPlacementOverlay } from './ltiPlacementOverlay';
import { LtiRegistration } from './ltiRegistration';
import { LtiResourceLink } from './ltiResourceLink';
import { LtiToolConfiguration } from './ltiToolConfiguration';
import { MediaComment } from './mediaComment';
import { MediaObject } from './mediaObject';
import { MediaTrack } from './mediaTrack';
import { MigrationIssue } from './migrationIssue';
import { Migrator } from './migrator';
import { ModelFile } from './modelFile';
import { Module } from './module';
import { ModuleAssignmentOverride } from './moduleAssignmentOverride';
import { ModuleItem } from './moduleItem';
import { ModuleItemSequence } from './moduleItemSequence';
import { ModuleItemSequenceNode } from './moduleItemSequenceNode';
import { MultipleAttemptsSettings } from './multipleAttemptsSettings';
import { NamesAndRoleContext } from './namesAndRoleContext';
import { NamesAndRoleMembership } from './namesAndRoleMembership';
import { NamesAndRoleMemberships } from './namesAndRoleMemberships';
import { NamesAndRoleMessage } from './namesAndRoleMessage';
import { NeedsGradingCount } from './needsGradingCount';
import { NewQuiz } from './newQuiz';
import { NotificationPreference } from './notificationPreference';
import { OriginalityReport } from './originalityReport';
import { Outcome } from './outcome';
import { OutcomeAlignment } from './outcomeAlignment';
import { OutcomeGroup } from './outcomeGroup';
import { OutcomeImport } from './outcomeImport';
import { OutcomeImportData } from './outcomeImportData';
import { OutcomeLink } from './outcomeLink';
import { OutcomePath } from './outcomePath';
import { OutcomePathPart } from './outcomePathPart';
import { OutcomeResult } from './outcomeResult';
import { OutcomeRollup } from './outcomeRollup';
import { OutcomeRollupLinks } from './outcomeRollupLinks';
import { OutcomeRollupScore } from './outcomeRollupScore';
import { OutcomeRollupScoreLinks } from './outcomeRollupScoreLinks';
import { OverrideTarget } from './overrideTarget';
import { Page } from './page';
import { PageRevision } from './pageRevision';
import { PageView } from './pageView';
import { PageViewLinks } from './pageViewLinks';
import { PairingCode } from './pairingCode';
import { PeerReview } from './peerReview';
import { PlannerNote } from './plannerNote';
import { PlannerOverride } from './plannerOverride';
import { Poll } from './poll';
import { PollChoice } from './pollChoice';
import { PollSession } from './pollSession';
import { PollSubmission } from './pollSubmission';
import { Proficiency } from './proficiency';
import { ProficiencyRating } from './proficiencyRating';
import { Profile } from './profile';
import { Progress } from './progress';
import { ProvisionalGrade } from './provisionalGrade';
import { QuestionFeedback } from './questionFeedback';
import { QuestionItem } from './questionItem';
import { Quiz } from './quiz';
import { QuizAccommodationRequest } from './quizAccommodationRequest';
import { QuizAssignmentOverride } from './quizAssignmentOverride';
import { QuizAssignmentOverrideSet } from './quizAssignmentOverrideSet';
import { QuizAssignmentOverrideSetContainer } from './quizAssignmentOverrideSetContainer';
import { QuizExtension } from './quizExtension';
import { QuizGroup } from './quizGroup';
import { QuizIPFilter } from './quizIPFilter';
import { QuizItem } from './quizItem';
import { QuizPermissions } from './quizPermissions';
import { QuizQuestion } from './quizQuestion';
import { QuizReport } from './quizReport';
import { QuizSettings } from './quizSettings';
import { QuizStatistics } from './quizStatistics';
import { QuizStatisticsAnswerPointBiserial } from './quizStatisticsAnswerPointBiserial';
import { QuizStatisticsAnswerStatistics } from './quizStatisticsAnswerStatistics';
import { QuizStatisticsLinks } from './quizStatisticsLinks';
import { QuizStatisticsQuestionStatistics } from './quizStatisticsQuestionStatistics';
import { QuizStatisticsSubmissionStatistics } from './quizStatisticsSubmissionStatistics';
import { QuizSubmission } from './quizSubmission';
import { QuizSubmissionEvent } from './quizSubmissionEvent';
import { QuizSubmissionQuestion } from './quizSubmissionQuestion';
import { Report } from './report';
import { Result } from './result';
import { ResultLinks } from './resultLinks';
import { ResultViewSettings } from './resultViewSettings';
import { Role } from './role';
import { RolePermissions } from './rolePermissions';
import { Rubric } from './rubric';
import { RubricAssessment } from './rubricAssessment';
import { RubricAssociation } from './rubricAssociation';
import { RubricCriteria } from './rubricCriteria';
import { RubricCriterion } from './rubricCriterion';
import { RubricRating } from './rubricRating';
import { SSOSettings } from './sSOSettings';
import { Scope } from './scope';
import { Score } from './score';
import { ScoreStatistic } from './scoreStatistic';
import { SearchResult } from './searchResult';
import { Section } from './section';
import { SectionAssignmentOverrideAttributes } from './sectionAssignmentOverrideAttributes';
import { SectionAttributes } from './sectionAttributes';
import { SharedBrandConfig } from './sharedBrandConfig';
import { SisAssignment } from './sisAssignment';
import { SisImport } from './sisImport';
import { SisImportCounts } from './sisImportCounts';
import { SisImportData } from './sisImportData';
import { SisImportError } from './sisImportError';
import { SisImportStatistic } from './sisImportStatistic';
import { SisImportStatistics } from './sisImportStatistics';
import { StimulusItem } from './stimulusItem';
import { StudentAttributes } from './studentAttributes';
import { Submission } from './submission';
import { SubmissionComment } from './submissionComment';
import { SubmissionHistory } from './submissionHistory';
import { SubmissionVersion } from './submissionVersion';
import { Tab } from './tab';
import { TemporaryEnrollmentPairing } from './temporaryEnrollmentPairing';
import { Term } from './term';
import { TermsOfService } from './termsOfService';
import { ToolSetting } from './toolSetting';
import { TurnitinSettings } from './turnitinSettings';
import { UpdatedEventData } from './updatedEventData';
import { UsageRights } from './usageRights';
import { User } from './user';
import { UserAssignmentOverrideAttributes } from './userAssignmentOverrideAttributes';
import { UserDisplay } from './userDisplay';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "DeveloperKey.WorkflowStateEnum": DeveloperKey.WorkflowStateEnum,
        "HelpLink.TypeEnum": HelpLink.TypeEnum,
        "LatePolicy.LateSubmissionIntervalEnum": LatePolicy.LateSubmissionIntervalEnum,
        "LtiLaunchSettings.DisplayTypeEnum": LtiLaunchSettings.DisplayTypeEnum,
        "LtiLaunchSettings.MessageTypeEnum": LtiLaunchSettings.MessageTypeEnum,
        "LtiLegacyConfigurationExtensionsInner.PrivacyLevelEnum": LtiLegacyConfigurationExtensionsInner.PrivacyLevelEnum,
        "LtiLegacyConfigurationExtensionsInnerSettings.DisplayTypeEnum": LtiLegacyConfigurationExtensionsInnerSettings.DisplayTypeEnum,
        "LtiOverlay.PrivacyLevelEnum": LtiOverlay.PrivacyLevelEnum,
        "LtiPlacement.DisplayTypeEnum": LtiPlacement.DisplayTypeEnum,
        "LtiPlacement.MessageTypeEnum": LtiPlacement.MessageTypeEnum,
        "LtiPlacement.PlacementEnum": LtiPlacement.PlacementEnum,
        "LtiPlacement.VisibilityEnum": LtiPlacement.VisibilityEnum,
        "LtiPlacementOverlay.MessageTypeEnum": LtiPlacementOverlay.MessageTypeEnum,
        "LtiRegistration.WorkflowStateEnum": LtiRegistration.WorkflowStateEnum,
        "LtiResourceLink.AssociatedContentTypeEnum": LtiResourceLink.AssociatedContentTypeEnum,
        "LtiResourceLink.ContextTypeEnum": LtiResourceLink.ContextTypeEnum,
        "LtiResourceLink.ResourceTypeEnum": LtiResourceLink.ResourceTypeEnum,
        "LtiResourceLink.WorkflowStateEnum": LtiResourceLink.WorkflowStateEnum,
        "LtiToolConfiguration.PrivacyLevelEnum": LtiToolConfiguration.PrivacyLevelEnum,
        "NamesAndRoleMembership.RolesEnum": NamesAndRoleMembership.RolesEnum,
        "NamesAndRoleMembership.StatusEnum": NamesAndRoleMembership.StatusEnum,
        "NamesAndRoleMessage.HttpsPurlImsglobalOrgSpecLtiClaimMessageTypeEnum": NamesAndRoleMessage.HttpsPurlImsglobalOrgSpecLtiClaimMessageTypeEnum,
        "TermsOfService.TermsTypeEnum": TermsOfService.TermsTypeEnum,
}

let typeMap: {[index: string]: any} = {
    "AccommodationResponse": AccommodationResponse,
    "AccommodationResponseFailedInner": AccommodationResponseFailedInner,
    "AccommodationResponseSuccessfulInner": AccommodationResponseSuccessfulInner,
    "Account": Account,
    "AccountCalendar": AccountCalendar,
    "AccountNotification": AccountNotification,
    "Admin": Admin,
    "AnonymousUserDisplay": AnonymousUserDisplay,
    "Answer": Answer,
    "Appointment": Appointment,
    "AppointmentGroup": AppointmentGroup,
    "Assessment": Assessment,
    "Assignment": Assignment,
    "AssignmentDate": AssignmentDate,
    "AssignmentEvent": AssignmentEvent,
    "AssignmentExtension": AssignmentExtension,
    "AssignmentGroup": AssignmentGroup,
    "AssignmentGroupAttributes": AssignmentGroupAttributes,
    "AssignmentGroupGrade": AssignmentGroupGrade,
    "AssignmentOverride": AssignmentOverride,
    "AuthenticationEvent": AuthenticationEvent,
    "AuthenticationProvider": AuthenticationProvider,
    "Avatar": Avatar,
    "BankEntryItem": BankEntryItem,
    "BankItem": BankItem,
    "BasicUser": BasicUser,
    "BlackoutDate": BlackoutDate,
    "BlockEditorTemplate": BlockEditorTemplate,
    "BlueprintMigration": BlueprintMigration,
    "BlueprintRestriction": BlueprintRestriction,
    "BlueprintSubscription": BlueprintSubscription,
    "BlueprintTemplate": BlueprintTemplate,
    "Bookmark": Bookmark,
    "CalendarEvent": CalendarEvent,
    "CalendarLink": CalendarLink,
    "ChangeRecord": ChangeRecord,
    "Collaboration": Collaboration,
    "Collaborator": Collaborator,
    "ColumnDatum": ColumnDatum,
    "CommMessage": CommMessage,
    "CommunicationChannel": CommunicationChannel,
    "CompletionRequirement": CompletionRequirement,
    "Conference": Conference,
    "ConferenceRecording": ConferenceRecording,
    "ContentDetails": ContentDetails,
    "ContentExport": ContentExport,
    "ContentMigration": ContentMigration,
    "ContentShare": ContentShare,
    "Conversation": Conversation,
    "ConversationParticipant": ConversationParticipant,
    "Course": Course,
    "CourseAccommodationRequest": CourseAccommodationRequest,
    "CourseAttributes": CourseAttributes,
    "CourseEpubExport": CourseEpubExport,
    "CourseEvent": CourseEvent,
    "CourseEventLink": CourseEventLink,
    "CourseNickname": CourseNickname,
    "CoursePace": CoursePace,
    "CourseProgress": CourseProgress,
    "CourseQuizExtension": CourseQuizExtension,
    "CreatedEventData": CreatedEventData,
    "CustomColumn": CustomColumn,
    "Day": Day,
    "DeveloperKey": DeveloperKey,
    "DeveloperKeyAccountBinding": DeveloperKeyAccountBinding,
    "DiscussionTopic": DiscussionTopic,
    "EPortfolio": EPortfolio,
    "EPortfolioPage": EPortfolioPage,
    "Enrollment": Enrollment,
    "EnrollmentTerm": EnrollmentTerm,
    "EnrollmentTermsList": EnrollmentTermsList,
    "EpubExport": EpubExport,
    "ErrorReport": ErrorReport,
    "ExceptionRecord": ExceptionRecord,
    "ExternalFeed": ExternalFeed,
    "ExternalToolTagAttributes": ExternalToolTagAttributes,
    "Favorite": Favorite,
    "Feature": Feature,
    "FeatureFlag": FeatureFlag,
    "FederatedAttributeConfig": FederatedAttributeConfig,
    "FederatedAttributesConfig": FederatedAttributesConfig,
    "FileAttachment": FileAttachment,
    "Folder": Folder,
    "Grade": Grade,
    "GradeChangeEvent": GradeChangeEvent,
    "GradeChangeEventLinks": GradeChangeEventLinks,
    "GradeGroup": GradeGroup,
    "Grader": Grader,
    "Grades": Grades,
    "GradingPeriod": GradingPeriod,
    "GradingPeriodSets": GradingPeriodSets,
    "GradingRules": GradingRules,
    "GradingSchemeEntry": GradingSchemeEntry,
    "GradingStandard": GradingStandard,
    "Group": Group,
    "GroupCategory": GroupCategory,
    "GroupMembership": GroupMembership,
    "HelpLink": HelpLink,
    "HelpLinks": HelpLinks,
    "HistoryEntry": HistoryEntry,
    "InstAccessToken": InstAccessToken,
    "ItemProperties": ItemProperties,
    "JWT": JWT,
    "LatePolicy": LatePolicy,
    "LearningObjectDates": LearningObjectDates,
    "License": License,
    "LineItem": LineItem,
    "ListLtiRegistrationsResponse": ListLtiRegistrationsResponse,
    "LockInfo": LockInfo,
    "LtiAssignment": LtiAssignment,
    "LtiLaunchDefinition": LtiLaunchDefinition,
    "LtiLaunchSettings": LtiLaunchSettings,
    "LtiLegacyConfiguration": LtiLegacyConfiguration,
    "LtiLegacyConfigurationExtensionsInner": LtiLegacyConfigurationExtensionsInner,
    "LtiLegacyConfigurationExtensionsInnerSettings": LtiLegacyConfigurationExtensionsInnerSettings,
    "LtiOverlay": LtiOverlay,
    "LtiPlacement": LtiPlacement,
    "LtiPlacementLaunchDefinition": LtiPlacementLaunchDefinition,
    "LtiPlacementOverlay": LtiPlacementOverlay,
    "LtiRegistration": LtiRegistration,
    "LtiResourceLink": LtiResourceLink,
    "LtiToolConfiguration": LtiToolConfiguration,
    "MediaComment": MediaComment,
    "MediaObject": MediaObject,
    "MediaTrack": MediaTrack,
    "MigrationIssue": MigrationIssue,
    "Migrator": Migrator,
    "ModelFile": ModelFile,
    "Module": Module,
    "ModuleAssignmentOverride": ModuleAssignmentOverride,
    "ModuleItem": ModuleItem,
    "ModuleItemSequence": ModuleItemSequence,
    "ModuleItemSequenceNode": ModuleItemSequenceNode,
    "MultipleAttemptsSettings": MultipleAttemptsSettings,
    "NamesAndRoleContext": NamesAndRoleContext,
    "NamesAndRoleMembership": NamesAndRoleMembership,
    "NamesAndRoleMemberships": NamesAndRoleMemberships,
    "NamesAndRoleMessage": NamesAndRoleMessage,
    "NeedsGradingCount": NeedsGradingCount,
    "NewQuiz": NewQuiz,
    "NotificationPreference": NotificationPreference,
    "OriginalityReport": OriginalityReport,
    "Outcome": Outcome,
    "OutcomeAlignment": OutcomeAlignment,
    "OutcomeGroup": OutcomeGroup,
    "OutcomeImport": OutcomeImport,
    "OutcomeImportData": OutcomeImportData,
    "OutcomeLink": OutcomeLink,
    "OutcomePath": OutcomePath,
    "OutcomePathPart": OutcomePathPart,
    "OutcomeResult": OutcomeResult,
    "OutcomeRollup": OutcomeRollup,
    "OutcomeRollupLinks": OutcomeRollupLinks,
    "OutcomeRollupScore": OutcomeRollupScore,
    "OutcomeRollupScoreLinks": OutcomeRollupScoreLinks,
    "OverrideTarget": OverrideTarget,
    "Page": Page,
    "PageRevision": PageRevision,
    "PageView": PageView,
    "PageViewLinks": PageViewLinks,
    "PairingCode": PairingCode,
    "PeerReview": PeerReview,
    "PlannerNote": PlannerNote,
    "PlannerOverride": PlannerOverride,
    "Poll": Poll,
    "PollChoice": PollChoice,
    "PollSession": PollSession,
    "PollSubmission": PollSubmission,
    "Proficiency": Proficiency,
    "ProficiencyRating": ProficiencyRating,
    "Profile": Profile,
    "Progress": Progress,
    "ProvisionalGrade": ProvisionalGrade,
    "QuestionFeedback": QuestionFeedback,
    "QuestionItem": QuestionItem,
    "Quiz": Quiz,
    "QuizAccommodationRequest": QuizAccommodationRequest,
    "QuizAssignmentOverride": QuizAssignmentOverride,
    "QuizAssignmentOverrideSet": QuizAssignmentOverrideSet,
    "QuizAssignmentOverrideSetContainer": QuizAssignmentOverrideSetContainer,
    "QuizExtension": QuizExtension,
    "QuizGroup": QuizGroup,
    "QuizIPFilter": QuizIPFilter,
    "QuizItem": QuizItem,
    "QuizPermissions": QuizPermissions,
    "QuizQuestion": QuizQuestion,
    "QuizReport": QuizReport,
    "QuizSettings": QuizSettings,
    "QuizStatistics": QuizStatistics,
    "QuizStatisticsAnswerPointBiserial": QuizStatisticsAnswerPointBiserial,
    "QuizStatisticsAnswerStatistics": QuizStatisticsAnswerStatistics,
    "QuizStatisticsLinks": QuizStatisticsLinks,
    "QuizStatisticsQuestionStatistics": QuizStatisticsQuestionStatistics,
    "QuizStatisticsSubmissionStatistics": QuizStatisticsSubmissionStatistics,
    "QuizSubmission": QuizSubmission,
    "QuizSubmissionEvent": QuizSubmissionEvent,
    "QuizSubmissionQuestion": QuizSubmissionQuestion,
    "Report": Report,
    "Result": Result,
    "ResultLinks": ResultLinks,
    "ResultViewSettings": ResultViewSettings,
    "Role": Role,
    "RolePermissions": RolePermissions,
    "Rubric": Rubric,
    "RubricAssessment": RubricAssessment,
    "RubricAssociation": RubricAssociation,
    "RubricCriteria": RubricCriteria,
    "RubricCriterion": RubricCriterion,
    "RubricRating": RubricRating,
    "SSOSettings": SSOSettings,
    "Scope": Scope,
    "Score": Score,
    "ScoreStatistic": ScoreStatistic,
    "SearchResult": SearchResult,
    "Section": Section,
    "SectionAssignmentOverrideAttributes": SectionAssignmentOverrideAttributes,
    "SectionAttributes": SectionAttributes,
    "SharedBrandConfig": SharedBrandConfig,
    "SisAssignment": SisAssignment,
    "SisImport": SisImport,
    "SisImportCounts": SisImportCounts,
    "SisImportData": SisImportData,
    "SisImportError": SisImportError,
    "SisImportStatistic": SisImportStatistic,
    "SisImportStatistics": SisImportStatistics,
    "StimulusItem": StimulusItem,
    "StudentAttributes": StudentAttributes,
    "Submission": Submission,
    "SubmissionComment": SubmissionComment,
    "SubmissionHistory": SubmissionHistory,
    "SubmissionVersion": SubmissionVersion,
    "Tab": Tab,
    "TemporaryEnrollmentPairing": TemporaryEnrollmentPairing,
    "Term": Term,
    "TermsOfService": TermsOfService,
    "ToolSetting": ToolSetting,
    "TurnitinSettings": TurnitinSettings,
    "UpdatedEventData": UpdatedEventData,
    "UsageRights": UsageRights,
    "User": User,
    "UserAssignmentOverrideAttributes": UserAssignmentOverrideAttributes,
    "UserDisplay": UserDisplay,
}

// Check if a string starts with another string without using es6 features
function startsWith(str: string, match: string): boolean {
    return str.substring(0, match.length) === match;
}

// Check if a string ends with another string without using es6 features
function endsWith(str: string, match: string): boolean {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
