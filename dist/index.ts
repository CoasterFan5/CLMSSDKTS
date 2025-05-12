import {show_access_token} from "./functions/show_access_token"
import {create_access_token} from "./functions/create_access_token"
import {update_access_token} from "./functions/update_access_token"
import {delete_access_token} from "./functions/delete_access_token"
import {list_available_account_calendars} from "./functions/list_available_account_calendars"
import {get_single_account_calendar} from "./functions/get_single_account_calendar"
import {update_calendar} from "./functions/update_calendar"
import {update_several_calendars} from "./functions/update_several_calendars"
import {list_all_account_calendars} from "./functions/list_all_account_calendars"
import {count_of_all_visible_account_calendars} from "./functions/count_of_all_visible_account_calendars"
import {search_account_domains} from "./functions/search_account_domains"
import {index_of_active_global_notification_for_user} from "./functions/index_of_active_global_notification_for_user"
import {show_global_notification} from "./functions/show_global_notification"
import {create_global_notification} from "./functions/create_global_notification"
import {update_global_notification} from "./functions/update_global_notification"
import {close_notification_for_user_destroy_notification_for_admin} from "./functions/close_notification_for_user_destroy_notification_for_admin"
import {list_available_reports} from "./functions/list_available_reports"
import {start_report} from "./functions/start_report"
import {index_of_reports} from "./functions/index_of_reports"
import {status_of_report} from "./functions/status_of_report"
import {delete_report} from "./functions/delete_report"
import {abort_report} from "./functions/abort_report"
import {list_accounts} from "./functions/list_accounts"
import {get_accounts_that_admins_can_manage} from "./functions/get_accounts_that_admins_can_manage"
import {get_accounts_that_users_can_create_courses_in} from "./functions/get_accounts_that_users_can_create_courses_in"
import {list_accounts_for_course_admins} from "./functions/list_accounts_for_course_admins"
import {get_single_account} from "./functions/get_single_account"
import {settings} from "./functions/settings"
import {list_environment_settings} from "./functions/list_environment_settings"
import {permissions} from "./functions/permissions"
import {get_sub_accounts_of_account} from "./functions/get_sub_accounts_of_account"
import {get_terms_of_service} from "./functions/get_terms_of_service"
import {get_help_links} from "./functions/get_help_links"
import {get_manually_created_courses_sub_account_for_domain_root_account} from "./functions/get_manually_created_courses_sub_account_for_domain_root_account"
import {list_active_courses_in_account} from "./functions/list_active_courses_in_account"
import {update_account} from "./functions/update_account"
import {delete_user_from_root_account} from "./functions/delete_user_from_root_account"
import {restore_deleted_user_from_root_account} from "./functions/restore_deleted_user_from_root_account"
import {create_new_sub_account} from "./functions/create_new_sub_account"
import {delete_sub_account} from "./functions/delete_sub_account"
import {get_account} from "./functions/get_account"
import {make_account_admin} from "./functions/make_account_admin"
import {remove_account_admin} from "./functions/remove_account_admin"
import {list_account_admins} from "./functions/list_account_admins"
import {list_my_admin_roles} from "./functions/list_my_admin_roles"
import {get_department_level_participation_data_terms} from "./functions/get_department_level_participation_data_terms"
import {get_department_level_participation_data_current} from "./functions/get_department_level_participation_data_current"
import {get_department_level_participation_data_completed} from "./functions/get_department_level_participation_data_completed"
import {get_department_level_grade_data_terms} from "./functions/get_department_level_grade_data_terms"
import {get_department_level_grade_data_current} from "./functions/get_department_level_grade_data_current"
import {get_department_level_grade_data_completed} from "./functions/get_department_level_grade_data_completed"
import {get_department_level_statistics_terms} from "./functions/get_department_level_statistics_terms"
import {get_department_level_statistics_current} from "./functions/get_department_level_statistics_current"
import {get_department_level_statistics_completed} from "./functions/get_department_level_statistics_completed"
import {get_department_level_statistics_broken_down_by_subaccount_terms} from "./functions/get_department_level_statistics_broken_down_by_subaccount_terms"
import {get_department_level_statistics_broken_down_by_subaccount_current} from "./functions/get_department_level_statistics_broken_down_by_subaccount_current"
import {get_department_level_statistics_broken_down_by_subaccount_completed} from "./functions/get_department_level_statistics_broken_down_by_subaccount_completed"
import {get_course_level_participation_data} from "./functions/get_course_level_participation_data"
import {get_course_level_assignment_data} from "./functions/get_course_level_assignment_data"
import {get_course_level_student_summary_data} from "./functions/get_course_level_student_summary_data"
import {get_user_in_a_course_level_participation_data} from "./functions/get_user_in_a_course_level_participation_data"
import {get_user_in_a_course_level_assignment_data} from "./functions/get_user_in_a_course_level_assignment_data"
import {get_user_in_a_course_level_messaging_data} from "./functions/get_user_in_a_course_level_messaging_data"
import {list_external_feeds_courses} from "./functions/list_external_feeds_courses"
import {list_external_feeds_groups} from "./functions/list_external_feeds_groups"
import {create_external_feed_courses} from "./functions/create_external_feed_courses"
import {create_external_feed_groups} from "./functions/create_external_feed_groups"
import {delete_external_feed_courses} from "./functions/delete_external_feed_courses"
import {delete_external_feed_groups} from "./functions/delete_external_feed_groups"
import {list_announcements} from "./functions/list_announcements"
import {list_scopes} from "./functions/list_scopes"
import {list_appointment_groups} from "./functions/list_appointment_groups"
import {create_appointment_group} from "./functions/create_appointment_group"
import {get_single_appointment_group} from "./functions/get_single_appointment_group"
import {update_appointment_group} from "./functions/update_appointment_group"
import {delete_appointment_group} from "./functions/delete_appointment_group"
import {list_user_participants} from "./functions/list_user_participants"
import {list_student_group_participants} from "./functions/list_student_group_participants"
import {get_next_appointment} from "./functions/get_next_appointment"
import {set_extensions_for_student_assignment_submissions} from "./functions/set_extensions_for_student_assignment_submissions"
import {list_assignment_groups} from "./functions/list_assignment_groups"
import {get_assignment_group} from "./functions/get_assignment_group"
import {create_assignment_group} from "./functions/create_assignment_group"
import {edit_assignment_group} from "./functions/edit_assignment_group"
import {destroy_assignment_group} from "./functions/destroy_assignment_group"
import {delete_assignment} from "./functions/delete_assignment"
import {list_assignments_assignments} from "./functions/list_assignments_assignments"
import {list_assignments_assignment_groups} from "./functions/list_assignments_assignment_groups"
import {list_assignments_for_user} from "./functions/list_assignments_for_user"
import {duplicate_assignment} from "./functions/duplicate_assignment"
import {list_group_members_for_student_on_assignment} from "./functions/list_group_members_for_student_on_assignment"
import {get_single_assignment} from "./functions/get_single_assignment"
import {create_assignment} from "./functions/create_assignment"
import {edit_assignment} from "./functions/edit_assignment"
import {bulk_update_assignment_dates} from "./functions/bulk_update_assignment_dates"
import {list_assignment_overrides} from "./functions/list_assignment_overrides"
import {get_single_assignment_override} from "./functions/get_single_assignment_override"
import {redirect_to_assignment_override_for_group} from "./functions/redirect_to_assignment_override_for_group"
import {redirect_to_assignment_override_for_section} from "./functions/redirect_to_assignment_override_for_section"
import {create_assignment_override} from "./functions/create_assignment_override"
import {update_assignment_override} from "./functions/update_assignment_override"
import {delete_assignment_override} from "./functions/delete_assignment_override"
import {batch_retrieve_overrides_in_course} from "./functions/batch_retrieve_overrides_in_course"
import {batch_create_overrides_in_course} from "./functions/batch_create_overrides_in_course"
import {batch_update_overrides_in_course} from "./functions/batch_update_overrides_in_course"
import {list_authentication_providers} from "./functions/list_authentication_providers"
import {get_authentication_provider} from "./functions/get_authentication_provider"
import {add_authentication_provider} from "./functions/add_authentication_provider"
import {update_authentication_provider} from "./functions/update_authentication_provider"
import {delete_authentication_provider} from "./functions/delete_authentication_provider"
import {restore_deleted_authentication_provider} from "./functions/restore_deleted_authentication_provider"
import {show_account_auth_settings} from "./functions/show_account_auth_settings"
import {update_account_auth_settings} from "./functions/update_account_auth_settings"
import {query_by_login} from "./functions/query_by_login"
import {query_by_account} from "./functions/query_by_account"
import {query_by_user} from "./functions/query_by_user"
import {list_blackout_dates_courses} from "./functions/list_blackout_dates_courses"
import {list_blackout_dates_accounts} from "./functions/list_blackout_dates_accounts"
import {get_single_blackout_date_courses} from "./functions/get_single_blackout_date_courses"
import {get_single_blackout_date_accounts} from "./functions/get_single_blackout_date_accounts"
import {new_blackout_date_courses} from "./functions/new_blackout_date_courses"
import {new_blackout_date_accounts} from "./functions/new_blackout_date_accounts"
import {create_blackout_date_courses} from "./functions/create_blackout_date_courses"
import {create_blackout_date_accounts} from "./functions/create_blackout_date_accounts"
import {update_blackout_date_courses} from "./functions/update_blackout_date_courses"
import {update_blackout_date_accounts} from "./functions/update_blackout_date_accounts"
import {delete_blackout_date_courses} from "./functions/delete_blackout_date_courses"
import {delete_blackout_date_accounts} from "./functions/delete_blackout_date_accounts"
import {update_list_of_blackout_dates} from "./functions/update_list_of_blackout_dates"
import {list_block_templates} from "./functions/list_block_templates"
import {get_blueprint_information} from "./functions/get_blueprint_information"
import {get_associated_course_information} from "./functions/get_associated_course_information"
import {update_associated_courses} from "./functions/update_associated_courses"
import {begin_migration_to_push_to_associated_courses} from "./functions/begin_migration_to_push_to_associated_courses"
import {set_or_remove_restrictions_on_blueprint_course_object} from "./functions/set_or_remove_restrictions_on_blueprint_course_object"
import {get_unsynced_changes} from "./functions/get_unsynced_changes"
import {list_blueprint_migrations} from "./functions/list_blueprint_migrations"
import {show_blueprint_migration} from "./functions/show_blueprint_migration"
import {get_migration_details} from "./functions/get_migration_details"
import {list_blueprint_subscriptions} from "./functions/list_blueprint_subscriptions"
import {list_blueprint_imports} from "./functions/list_blueprint_imports"
import {show_blueprint_import} from "./functions/show_blueprint_import"
import {get_import_details} from "./functions/get_import_details"
import {list_bookmarks} from "./functions/list_bookmarks"
import {create_bookmark} from "./functions/create_bookmark"
import {get_bookmark} from "./functions/get_bookmark"
import {update_bookmark} from "./functions/update_bookmark"
import {delete_bookmark} from "./functions/delete_bookmark"
import {get_brand_config_variables_that_should_be_used_for_this_domain} from "./functions/get_brand_config_variables_that_should_be_used_for_this_domain"
import {list_calendar_events} from "./functions/list_calendar_events"
import {list_calendar_events_for_user} from "./functions/list_calendar_events_for_user"
import {create_calendar_event} from "./functions/create_calendar_event"
import {get_single_calendar_event_or_assignment} from "./functions/get_single_calendar_event_or_assignment"
import {reserve_time_slot} from "./functions/reserve_time_slot"
import {reserve_time_slot_participant_id} from "./functions/reserve_time_slot_participant_id"
import {update_calendar_event} from "./functions/update_calendar_event"
import {delete_calendar_event} from "./functions/delete_calendar_event"
import {save_enabled_account_calendars} from "./functions/save_enabled_account_calendars"
import {set_course_timetable} from "./functions/set_course_timetable"
import {get_course_timetable} from "./functions/get_course_timetable"
import {create_or_update_events_directly_for_course_timetable} from "./functions/create_or_update_events_directly_for_course_timetable"
import {list_collaborations_courses} from "./functions/list_collaborations_courses"
import {list_collaborations_groups} from "./functions/list_collaborations_groups"
import {list_members_of_collaboration} from "./functions/list_members_of_collaboration"
import {list_potential_members_courses} from "./functions/list_potential_members_courses"
import {list_potential_members_groups} from "./functions/list_potential_members_groups"
import {list_of_commmessages_for_user} from "./functions/list_of_commmessages_for_user"
import {list_user_communication_channels} from "./functions/list_user_communication_channels"
import {create_communication_channel} from "./functions/create_communication_channel"
import {delete_communication_channel_id} from "./functions/delete_communication_channel_id"
import {delete_communication_channel_type} from "./functions/delete_communication_channel_type"
import {delete_push_notification_endpoint} from "./functions/delete_push_notification_endpoint"
import {list_conferences_courses} from "./functions/list_conferences_courses"
import {list_conferences_groups} from "./functions/list_conferences_groups"
import {list_conferences_for_current_user} from "./functions/list_conferences_for_current_user"
import {list_content_exports_courses} from "./functions/list_content_exports_courses"
import {list_content_exports_groups} from "./functions/list_content_exports_groups"
import {list_content_exports_users} from "./functions/list_content_exports_users"
import {show_content_export_courses} from "./functions/show_content_export_courses"
import {show_content_export_groups} from "./functions/show_content_export_groups"
import {show_content_export_users} from "./functions/show_content_export_users"
import {export_content_courses} from "./functions/export_content_courses"
import {export_content_groups} from "./functions/export_content_groups"
import {export_content_users} from "./functions/export_content_users"
import {list_migration_issues_accounts} from "./functions/list_migration_issues_accounts"
import {list_migration_issues_courses} from "./functions/list_migration_issues_courses"
import {list_migration_issues_groups} from "./functions/list_migration_issues_groups"
import {list_migration_issues_users} from "./functions/list_migration_issues_users"
import {get_migration_issue_accounts} from "./functions/get_migration_issue_accounts"
import {get_migration_issue_courses} from "./functions/get_migration_issue_courses"
import {get_migration_issue_groups} from "./functions/get_migration_issue_groups"
import {get_migration_issue_users} from "./functions/get_migration_issue_users"
import {update_migration_issue_accounts} from "./functions/update_migration_issue_accounts"
import {update_migration_issue_courses} from "./functions/update_migration_issue_courses"
import {update_migration_issue_groups} from "./functions/update_migration_issue_groups"
import {update_migration_issue_users} from "./functions/update_migration_issue_users"
import {list_content_migrations_accounts} from "./functions/list_content_migrations_accounts"
import {list_content_migrations_courses} from "./functions/list_content_migrations_courses"
import {list_content_migrations_groups} from "./functions/list_content_migrations_groups"
import {list_content_migrations_users} from "./functions/list_content_migrations_users"
import {get_content_migration_accounts} from "./functions/get_content_migration_accounts"
import {get_content_migration_courses} from "./functions/get_content_migration_courses"
import {get_content_migration_groups} from "./functions/get_content_migration_groups"
import {get_content_migration_users} from "./functions/get_content_migration_users"
import {create_content_migration_accounts} from "./functions/create_content_migration_accounts"
import {create_content_migration_courses} from "./functions/create_content_migration_courses"
import {create_content_migration_groups} from "./functions/create_content_migration_groups"
import {create_content_migration_users} from "./functions/create_content_migration_users"
import {update_content_migration_accounts} from "./functions/update_content_migration_accounts"
import {update_content_migration_courses} from "./functions/update_content_migration_courses"
import {update_content_migration_groups} from "./functions/update_content_migration_groups"
import {update_content_migration_users} from "./functions/update_content_migration_users"
import {list_migration_systems_accounts} from "./functions/list_migration_systems_accounts"
import {list_migration_systems_courses} from "./functions/list_migration_systems_courses"
import {list_migration_systems_groups} from "./functions/list_migration_systems_groups"
import {list_migration_systems_users} from "./functions/list_migration_systems_users"
import {list_items_for_selective_import_accounts} from "./functions/list_items_for_selective_import_accounts"
import {list_items_for_selective_import_courses} from "./functions/list_items_for_selective_import_courses"
import {list_items_for_selective_import_groups} from "./functions/list_items_for_selective_import_groups"
import {list_items_for_selective_import_users} from "./functions/list_items_for_selective_import_users"
import {get_asset_id_mapping} from "./functions/get_asset_id_mapping"
import {get_current_settings_for_account_or_course_courses} from "./functions/get_current_settings_for_account_or_course_courses"
import {get_current_settings_for_account_or_course_accounts} from "./functions/get_current_settings_for_account_or_course_accounts"
import {enable_disable_or_clear_explicit_csp_setting_courses} from "./functions/enable_disable_or_clear_explicit_csp_setting_courses"
import {enable_disable_or_clear_explicit_csp_setting_accounts} from "./functions/enable_disable_or_clear_explicit_csp_setting_accounts"
import {lock_or_unlock_current_csp_settings_for_sub_accounts_and_courses} from "./functions/lock_or_unlock_current_csp_settings_for_sub_accounts_and_courses"
import {add_allowed_domain_to_account} from "./functions/add_allowed_domain_to_account"
import {add_multiple_allowed_domains_to_account} from "./functions/add_multiple_allowed_domains_to_account"
import {remove_domain_from_account} from "./functions/remove_domain_from_account"
import {create_content_share} from "./functions/create_content_share"
import {list_content_shares_sent} from "./functions/list_content_shares_sent"
import {list_content_shares_received} from "./functions/list_content_shares_received"
import {get_unread_shares_count} from "./functions/get_unread_shares_count"
import {get_content_share} from "./functions/get_content_share"
import {remove_content_share} from "./functions/remove_content_share"
import {add_users_to_content_share} from "./functions/add_users_to_content_share"
import {update_content_share} from "./functions/update_content_share"
import {list_conversations} from "./functions/list_conversations"
import {create_conversation} from "./functions/create_conversation"
import {get_running_batches} from "./functions/get_running_batches"
import {get_single_conversation} from "./functions/get_single_conversation"
import {edit_conversation} from "./functions/edit_conversation"
import {mark_all_as_read} from "./functions/mark_all_as_read"
import {delete_conversation} from "./functions/delete_conversation"
import {add_recipients} from "./functions/add_recipients"
import {add_message} from "./functions/add_message"
import {delete_message} from "./functions/delete_message"
import {batch_update_conversations} from "./functions/batch_update_conversations"
import {find_recipients} from "./functions/find_recipients"
import {unread_count} from "./functions/unread_count"
import {query_by_course} from "./functions/query_by_course"
import {show_course_pace} from "./functions/show_course_pace"
import {create_course_pace} from "./functions/create_course_pace"
import {update_course_pace} from "./functions/update_course_pace"
import {delete_course_pace} from "./functions/delete_course_pace"
import {set_extensions_for_student_quiz_submissions} from "./functions/set_extensions_for_student_quiz_submissions"
import {status_of_last_report} from "./functions/status_of_last_report"
import {list_your_courses} from "./functions/list_your_courses"
import {list_courses_for_user} from "./functions/list_courses_for_user"
import {get_user_progress} from "./functions/get_user_progress"
import {create_new_course} from "./functions/create_new_course"
import {upload_file} from "./functions/upload_file"
import {list_students} from "./functions/list_students"
import {list_users_in_course_users} from "./functions/list_users_in_course_users"
import {list_users_in_course_search_users} from "./functions/list_users_in_course_search_users"
import {list_recently_logged_in_students} from "./functions/list_recently_logged_in_students"
import {get_single_user} from "./functions/get_single_user"
import {search_for_content_share_users} from "./functions/search_for_content_share_users"
import {preview_processed_html} from "./functions/preview_processed_html"
import {course_activity_stream} from "./functions/course_activity_stream"
import {course_activity_stream_summary} from "./functions/course_activity_stream_summary"
import {course_todo_items} from "./functions/course_todo_items"
import {delete_conclude_course} from "./functions/delete_conclude_course"
import {get_course_settings} from "./functions/get_course_settings"
import {update_course_settings} from "./functions/update_course_settings"
import {return_test_student_for_course} from "./functions/return_test_student_for_course"
import {get_single_course_courses} from "./functions/get_single_course_courses"
import {get_single_course_accounts} from "./functions/get_single_course_accounts"
import {update_course} from "./functions/update_course"
import {update_courses} from "./functions/update_courses"
import {reset_course} from "./functions/reset_course"
import {get_effective_due_dates} from "./functions/get_effective_due_dates"
import {get_bulk_user_progress} from "./functions/get_bulk_user_progress"
import {remove_quiz_migration_alert} from "./functions/remove_quiz_migration_alert"
import {get_course_copy_status} from "./functions/get_course_copy_status"
import {copy_course_content} from "./functions/copy_course_content"
import {list_custom_gradebook_columns} from "./functions/list_custom_gradebook_columns"
import {create_custom_gradebook_column} from "./functions/create_custom_gradebook_column"
import {update_custom_gradebook_column} from "./functions/update_custom_gradebook_column"
import {delete_custom_gradebook_column} from "./functions/delete_custom_gradebook_column"
import {reorder_custom_columns} from "./functions/reorder_custom_columns"
import {list_entries_for_column} from "./functions/list_entries_for_column"
import {update_column_data} from "./functions/update_column_data"
import {bulk_update_column_data} from "./functions/bulk_update_column_data"
import {create_developer_key_account_binding} from "./functions/create_developer_key_account_binding"
import {list_developer_keys} from "./functions/list_developer_keys"
import {create_developer_key} from "./functions/create_developer_key"
import {update_developer_key} from "./functions/update_developer_key"
import {delete_developer_key} from "./functions/delete_developer_key"
import {list_discussion_topics_courses} from "./functions/list_discussion_topics_courses"
import {list_discussion_topics_groups} from "./functions/list_discussion_topics_groups"
import {create_new_discussion_topic_courses} from "./functions/create_new_discussion_topic_courses"
import {create_new_discussion_topic_groups} from "./functions/create_new_discussion_topic_groups"
import {update_topic_courses} from "./functions/update_topic_courses"
import {update_topic_groups} from "./functions/update_topic_groups"
import {delete_topic_courses} from "./functions/delete_topic_courses"
import {delete_topic_groups} from "./functions/delete_topic_groups"
import {reorder_pinned_topics_courses} from "./functions/reorder_pinned_topics_courses"
import {reorder_pinned_topics_groups} from "./functions/reorder_pinned_topics_groups"
import {update_entry_courses} from "./functions/update_entry_courses"
import {update_entry_groups} from "./functions/update_entry_groups"
import {delete_entry_courses} from "./functions/delete_entry_courses"
import {delete_entry_groups} from "./functions/delete_entry_groups"
import {get_single_topic_courses} from "./functions/get_single_topic_courses"
import {get_single_topic_groups} from "./functions/get_single_topic_groups"
import {find_last_summary_courses} from "./functions/find_last_summary_courses"
import {find_last_summary_groups} from "./functions/find_last_summary_groups"
import {find_or_create_summary_courses} from "./functions/find_or_create_summary_courses"
import {find_or_create_summary_groups} from "./functions/find_or_create_summary_groups"
import {disable_summary_courses} from "./functions/disable_summary_courses"
import {disable_summary_groups} from "./functions/disable_summary_groups"
import {summary_feedback_courses} from "./functions/summary_feedback_courses"
import {summary_feedback_groups} from "./functions/summary_feedback_groups"
import {get_full_topic_courses} from "./functions/get_full_topic_courses"
import {get_full_topic_groups} from "./functions/get_full_topic_groups"
import {post_entry_courses} from "./functions/post_entry_courses"
import {post_entry_groups} from "./functions/post_entry_groups"
import {duplicate_discussion_topic_courses} from "./functions/duplicate_discussion_topic_courses"
import {duplicate_discussion_topic_groups} from "./functions/duplicate_discussion_topic_groups"
import {list_topic_entries_courses} from "./functions/list_topic_entries_courses"
import {list_topic_entries_groups} from "./functions/list_topic_entries_groups"
import {post_reply_courses} from "./functions/post_reply_courses"
import {post_reply_groups} from "./functions/post_reply_groups"
import {list_entry_replies_courses} from "./functions/list_entry_replies_courses"
import {list_entry_replies_groups} from "./functions/list_entry_replies_groups"
import {list_entries_courses} from "./functions/list_entries_courses"
import {list_entries_groups} from "./functions/list_entries_groups"
import {mark_topic_as_read_courses} from "./functions/mark_topic_as_read_courses"
import {mark_topic_as_read_groups} from "./functions/mark_topic_as_read_groups"
import {mark_all_topic_as_read_courses} from "./functions/mark_all_topic_as_read_courses"
import {mark_all_topic_as_read_groups} from "./functions/mark_all_topic_as_read_groups"
import {mark_topic_as_unread_courses} from "./functions/mark_topic_as_unread_courses"
import {mark_topic_as_unread_groups} from "./functions/mark_topic_as_unread_groups"
import {mark_all_entries_as_read_courses} from "./functions/mark_all_entries_as_read_courses"
import {mark_all_entries_as_read_groups} from "./functions/mark_all_entries_as_read_groups"
import {mark_all_entries_as_unread_courses} from "./functions/mark_all_entries_as_unread_courses"
import {mark_all_entries_as_unread_groups} from "./functions/mark_all_entries_as_unread_groups"
import {mark_entry_as_read_courses} from "./functions/mark_entry_as_read_courses"
import {mark_entry_as_read_groups} from "./functions/mark_entry_as_read_groups"
import {mark_entry_as_unread_courses} from "./functions/mark_entry_as_unread_courses"
import {mark_entry_as_unread_groups} from "./functions/mark_entry_as_unread_groups"
import {rate_entry_courses} from "./functions/rate_entry_courses"
import {rate_entry_groups} from "./functions/rate_entry_groups"
import {subscribe_to_topic_courses} from "./functions/subscribe_to_topic_courses"
import {subscribe_to_topic_groups} from "./functions/subscribe_to_topic_groups"
import {unsubscribe_from_topic_courses} from "./functions/unsubscribe_from_topic_courses"
import {unsubscribe_from_topic_groups} from "./functions/unsubscribe_from_topic_groups"
import {get_all_eportfolios_for_user} from "./functions/get_all_eportfolios_for_user"
import {get_eportfolio} from "./functions/get_eportfolio"
import {delete_eportfolio} from "./functions/delete_eportfolio"
import {get_eportfolio_pages} from "./functions/get_eportfolio_pages"
import {moderate_eportfolio} from "./functions/moderate_eportfolio"
import {moderate_all_eportfolios_for_user} from "./functions/moderate_all_eportfolios_for_user"
import {restore_deleted_eportfolio} from "./functions/restore_deleted_eportfolio"
import {list_courses_with_their_latest_epub_export} from "./functions/list_courses_with_their_latest_epub_export"
import {create_epub_export} from "./functions/create_epub_export"
import {show_epub_export} from "./functions/show_epub_export"
import {create_enrollment_term} from "./functions/create_enrollment_term"
import {update_enrollment_term} from "./functions/update_enrollment_term"
import {delete_enrollment_term} from "./functions/delete_enrollment_term"
import {list_enrollment_terms} from "./functions/list_enrollment_terms"
import {retrieve_enrollment_term} from "./functions/retrieve_enrollment_term"
import {list_enrollments_courses} from "./functions/list_enrollments_courses"
import {list_enrollments_sections} from "./functions/list_enrollments_sections"
import {list_enrollments_users} from "./functions/list_enrollments_users"
import {enrollment_by_id} from "./functions/enrollment_by_id"
import {enroll_user_courses} from "./functions/enroll_user_courses"
import {enroll_user_sections} from "./functions/enroll_user_sections"
import {conclude_deactivate_or_delete_enrollment} from "./functions/conclude_deactivate_or_delete_enrollment"
import {accept_course_invitation} from "./functions/accept_course_invitation"
import {reject_course_invitation} from "./functions/reject_course_invitation"
import {re_activate_enrollment} from "./functions/re_activate_enrollment"
import {add_last_attended_date} from "./functions/add_last_attended_date"
import {show_temporary_enrollment_recipient_and_provider_status} from "./functions/show_temporary_enrollment_recipient_and_provider_status"
import {create_error_report} from "./functions/create_error_report"
import {list_external_tools_courses} from "./functions/list_external_tools_courses"
import {list_external_tools_accounts} from "./functions/list_external_tools_accounts"
import {list_external_tools_groups} from "./functions/list_external_tools_groups"
import {get_sessionless_launch_url_for_external_tool_courses} from "./functions/get_sessionless_launch_url_for_external_tool_courses"
import {get_sessionless_launch_url_for_external_tool_accounts} from "./functions/get_sessionless_launch_url_for_external_tool_accounts"
import {get_single_external_tool_courses} from "./functions/get_single_external_tool_courses"
import {get_single_external_tool_accounts} from "./functions/get_single_external_tool_accounts"
import {create_external_tool_courses} from "./functions/create_external_tool_courses"
import {create_external_tool_accounts} from "./functions/create_external_tool_accounts"
import {edit_external_tool_courses} from "./functions/edit_external_tool_courses"
import {edit_external_tool_accounts} from "./functions/edit_external_tool_accounts"
import {delete_external_tool_courses} from "./functions/delete_external_tool_courses"
import {delete_external_tool_accounts} from "./functions/delete_external_tool_accounts"
import {add_tool_to_rce_favorites} from "./functions/add_tool_to_rce_favorites"
import {remove_tool_from_rce_favorites} from "./functions/remove_tool_from_rce_favorites"
import {add_tool_to_top_navigation_favorites} from "./functions/add_tool_to_top_navigation_favorites"
import {remove_tool_from_top_navigation_favorites} from "./functions/remove_tool_from_top_navigation_favorites"
import {get_visible_course_navigation_tools} from "./functions/get_visible_course_navigation_tools"
import {get_visible_course_navigation_tools_for_single_course} from "./functions/get_visible_course_navigation_tools_for_single_course"
import {list_favorite_courses} from "./functions/list_favorite_courses"
import {list_favorite_groups} from "./functions/list_favorite_groups"
import {add_course_to_favorites} from "./functions/add_course_to_favorites"
import {add_group_to_favorites} from "./functions/add_group_to_favorites"
import {remove_course_from_favorites} from "./functions/remove_course_from_favorites"
import {remove_group_from_favorites} from "./functions/remove_group_from_favorites"
import {reset_course_favorites} from "./functions/reset_course_favorites"
import {reset_group_favorites} from "./functions/reset_group_favorites"
import {list_features_courses} from "./functions/list_features_courses"
import {list_features_accounts} from "./functions/list_features_accounts"
import {list_features_users} from "./functions/list_features_users"
import {list_enabled_features_courses} from "./functions/list_enabled_features_courses"
import {list_enabled_features_accounts} from "./functions/list_enabled_features_accounts"
import {list_enabled_features_users} from "./functions/list_enabled_features_users"
import {list_environment_features} from "./functions/list_environment_features"
import {get_feature_flag_courses} from "./functions/get_feature_flag_courses"
import {get_feature_flag_accounts} from "./functions/get_feature_flag_accounts"
import {get_feature_flag_users} from "./functions/get_feature_flag_users"
import {set_feature_flag_courses} from "./functions/set_feature_flag_courses"
import {set_feature_flag_accounts} from "./functions/set_feature_flag_accounts"
import {set_feature_flag_users} from "./functions/set_feature_flag_users"
import {remove_feature_flag_courses} from "./functions/remove_feature_flag_courses"
import {remove_feature_flag_accounts} from "./functions/remove_feature_flag_accounts"
import {remove_feature_flag_users} from "./functions/remove_feature_flag_users"
import {get_quota_information_courses} from "./functions/get_quota_information_courses"
import {get_quota_information_groups} from "./functions/get_quota_information_groups"
import {get_quota_information_users} from "./functions/get_quota_information_users"
import {list_files_courses} from "./functions/list_files_courses"
import {list_files_users} from "./functions/list_files_users"
import {list_files_groups} from "./functions/list_files_groups"
import {list_files_folders} from "./functions/list_files_folders"
import {get_public_inline_preview_url} from "./functions/get_public_inline_preview_url"
import {get_file_files} from "./functions/get_file_files"
import {get_file_courses} from "./functions/get_file_courses"
import {get_file_groups} from "./functions/get_file_groups"
import {get_file_users} from "./functions/get_file_users"
import {translate_file_reference} from "./functions/translate_file_reference"
import {update_file} from "./functions/update_file"
import {delete_file} from "./functions/delete_file"
import {get_icon_metadata} from "./functions/get_icon_metadata"
import {reset_link_verifier} from "./functions/reset_link_verifier"
import {list_folders} from "./functions/list_folders"
import {list_folders_and_files} from "./functions/list_folders_and_files"
import {list_all_folders_courses} from "./functions/list_all_folders_courses"
import {list_all_folders_users} from "./functions/list_all_folders_users"
import {list_all_folders_groups} from "./functions/list_all_folders_groups"
import {resolve_path_courses_full_path} from "./functions/resolve_path_courses_full_path"
import {resolve_path_courses} from "./functions/resolve_path_courses"
import {resolve_path_users_full_path} from "./functions/resolve_path_users_full_path"
import {resolve_path_users} from "./functions/resolve_path_users"
import {resolve_path_groups_full_path} from "./functions/resolve_path_groups_full_path"
import {resolve_path_groups} from "./functions/resolve_path_groups"
import {get_folder_courses} from "./functions/get_folder_courses"
import {get_folder_users} from "./functions/get_folder_users"
import {get_folder_groups} from "./functions/get_folder_groups"
import {get_folder_folders} from "./functions/get_folder_folders"
import {update_folder} from "./functions/update_folder"
import {create_folder_courses} from "./functions/create_folder_courses"
import {create_folder_users} from "./functions/create_folder_users"
import {create_folder_groups} from "./functions/create_folder_groups"
import {create_folder_folders} from "./functions/create_folder_folders"
import {create_folder_accounts} from "./functions/create_folder_accounts"
import {delete_folder} from "./functions/delete_folder"
import {copy_file} from "./functions/copy_file"
import {copy_folder} from "./functions/copy_folder"
import {get_uploaded_media_folder_for_user_courses} from "./functions/get_uploaded_media_folder_for_user_courses"
import {get_uploaded_media_folder_for_user_groups} from "./functions/get_uploaded_media_folder_for_user_groups"
import {set_usage_rights_courses} from "./functions/set_usage_rights_courses"
import {set_usage_rights_groups} from "./functions/set_usage_rights_groups"
import {set_usage_rights_users} from "./functions/set_usage_rights_users"
import {remove_usage_rights_courses} from "./functions/remove_usage_rights_courses"
import {remove_usage_rights_groups} from "./functions/remove_usage_rights_groups"
import {remove_usage_rights_users} from "./functions/remove_usage_rights_users"
import {list_licenses_courses} from "./functions/list_licenses_courses"
import {list_licenses_groups} from "./functions/list_licenses_groups"
import {list_licenses_users} from "./functions/list_licenses_users"
import {query_by_assignment} from "./functions/query_by_assignment"
import {query_by_student} from "./functions/query_by_student"
import {query_by_grader} from "./functions/query_by_grader"
import {advanced_query} from "./functions/advanced_query"
import {days_in_gradebook_history_for_this_course} from "./functions/days_in_gradebook_history_for_this_course"
import {details_for_given_date_in_gradebook_history_for_this_course} from "./functions/details_for_given_date_in_gradebook_history_for_this_course"
import {lists_submissions} from "./functions/lists_submissions"
import {list_uncollated_submission_versions} from "./functions/list_uncollated_submission_versions"
import {list_grading_period_sets} from "./functions/list_grading_period_sets"
import {create_grading_period_set} from "./functions/create_grading_period_set"
import {update_grading_period_set} from "./functions/update_grading_period_set"
import {delete_grading_period_set} from "./functions/delete_grading_period_set"
import {list_grading_periods_accounts} from "./functions/list_grading_periods_accounts"
import {list_grading_periods_courses} from "./functions/list_grading_periods_courses"
import {get_single_grading_period} from "./functions/get_single_grading_period"
import {update_single_grading_period} from "./functions/update_single_grading_period"
import {delete_grading_period_courses} from "./functions/delete_grading_period_courses"
import {delete_grading_period_accounts} from "./functions/delete_grading_period_accounts"
import {batch_update_grading_periods_courses} from "./functions/batch_update_grading_periods_courses"
import {batch_update_grading_periods_grading_period_sets} from "./functions/batch_update_grading_periods_grading_period_sets"
import {create_new_grading_standard_accounts} from "./functions/create_new_grading_standard_accounts"
import {create_new_grading_standard_courses} from "./functions/create_new_grading_standard_courses"
import {list_grading_standards_available_in_context_courses} from "./functions/list_grading_standards_available_in_context_courses"
import {list_grading_standards_available_in_context_accounts} from "./functions/list_grading_standards_available_in_context_accounts"
import {get_single_grading_standard_in_context_courses} from "./functions/get_single_grading_standard_in_context_courses"
import {get_single_grading_standard_in_context_accounts} from "./functions/get_single_grading_standard_in_context_accounts"
import {list_group_categories_for_context_accounts} from "./functions/list_group_categories_for_context_accounts"
import {list_group_categories_for_context_courses} from "./functions/list_group_categories_for_context_courses"
import {get_single_group_category} from "./functions/get_single_group_category"
import {create_group_category_accounts} from "./functions/create_group_category_accounts"
import {create_group_category_courses} from "./functions/create_group_category_courses"
import {bulk_manage_differentiation_tags} from "./functions/bulk_manage_differentiation_tags"
import {import_category_groups} from "./functions/import_category_groups"
import {update_group_category} from "./functions/update_group_category"
import {delete_group_category} from "./functions/delete_group_category"
import {list_groups_in_group_category} from "./functions/list_groups_in_group_category"
import {export_groups_in_and_users_in_category} from "./functions/export_groups_in_and_users_in_category"
import {list_users_in_group_category} from "./functions/list_users_in_group_category"
import {assign_unassigned_members} from "./functions/assign_unassigned_members"
import {list_your_groups} from "./functions/list_your_groups"
import {list_groups_available_in_context_accounts} from "./functions/list_groups_available_in_context_accounts"
import {list_groups_available_in_context_courses} from "./functions/list_groups_available_in_context_courses"
import {get_single_group} from "./functions/get_single_group"
import {create_group_groups} from "./functions/create_group_groups"
import {create_group_group_categories} from "./functions/create_group_group_categories"
import {edit_group} from "./functions/edit_group"
import {delete_group} from "./functions/delete_group"
import {invite_others_to_group} from "./functions/invite_others_to_group"
import {list_group_s_users} from "./functions/list_group_s_users"
import {group_activity_stream} from "./functions/group_activity_stream"
import {group_activity_stream_summary} from "./functions/group_activity_stream_summary"
import {list_group_memberships} from "./functions/list_group_memberships"
import {get_single_group_membership_memberships} from "./functions/get_single_group_membership_memberships"
import {get_single_group_membership_users} from "./functions/get_single_group_membership_users"
import {create_membership} from "./functions/create_membership"
import {update_membership_memberships} from "./functions/update_membership_memberships"
import {update_membership_users} from "./functions/update_membership_users"
import {leave_group_memberships} from "./functions/leave_group_memberships"
import {leave_group_users} from "./functions/leave_group_users"
import {list_recent_history_for_user} from "./functions/list_recent_history_for_user"
import {create_instaccess_token} from "./functions/create_instaccess_token"
import {create_jwt} from "./functions/create_jwt"
import {refresh_jwt} from "./functions/refresh_jwt"
import {get_late_policy} from "./functions/get_late_policy"
import {create_late_policy} from "./functions/create_late_policy"
import {patch_late_policy} from "./functions/patch_late_policy"
import {get_learning_object_s_date_information_modules} from "./functions/get_learning_object_s_date_information_modules"
import {get_learning_object_s_date_information_assignments} from "./functions/get_learning_object_s_date_information_assignments"
import {get_learning_object_s_date_information_quizzes} from "./functions/get_learning_object_s_date_information_quizzes"
import {get_learning_object_s_date_information_discussion_topics} from "./functions/get_learning_object_s_date_information_discussion_topics"
import {get_learning_object_s_date_information_pages} from "./functions/get_learning_object_s_date_information_pages"
import {get_learning_object_s_date_information_files} from "./functions/get_learning_object_s_date_information_files"
import {update_learning_object_s_date_information_assignments} from "./functions/update_learning_object_s_date_information_assignments"
import {update_learning_object_s_date_information_quizzes} from "./functions/update_learning_object_s_date_information_quizzes"
import {update_learning_object_s_date_information_discussion_topics} from "./functions/update_learning_object_s_date_information_discussion_topics"
import {update_learning_object_s_date_information_pages} from "./functions/update_learning_object_s_date_information_pages"
import {update_learning_object_s_date_information_files} from "./functions/update_learning_object_s_date_information_files"
import {create_line_item} from "./functions/create_line_item"
import {update_line_item} from "./functions/update_line_item"
import {show_line_item} from "./functions/show_line_item"
import {list_line_items} from "./functions/list_line_items"
import {delete_line_item} from "./functions/delete_line_item"
import {create_live_assessment_results} from "./functions/create_live_assessment_results"
import {list_live_assessment_results} from "./functions/list_live_assessment_results"
import {create_or_find_live_assessment} from "./functions/create_or_find_live_assessment"
import {list_live_assessments} from "./functions/list_live_assessments"
import {list_user_logins_accounts} from "./functions/list_user_logins_accounts"
import {list_user_logins_users} from "./functions/list_user_logins_users"
import {kickoff_password_recovery_flow} from "./functions/kickoff_password_recovery_flow"
import {create_user_login} from "./functions/create_user_login"
import {edit_user_login} from "./functions/edit_user_login"
import {delete_user_login} from "./functions/delete_user_login"
import {list_lti_launch_definitions_courses} from "./functions/list_lti_launch_definitions_courses"
import {list_lti_launch_definitions_accounts} from "./functions/list_lti_launch_definitions_accounts"
import {list_lti_registrations_in_account} from "./functions/list_lti_registrations_in_account"
import {show_lti_registration} from "./functions/show_lti_registration"
import {create_lti_registration} from "./functions/create_lti_registration"
import {show_lti_registration_via_client_id} from "./functions/show_lti_registration_via_client_id"
import {update_lti_registration} from "./functions/update_lti_registration"
import {reset_lti_registration_to_defaults} from "./functions/reset_lti_registration_to_defaults"
import {delete_lti_registration} from "./functions/delete_lti_registration"
import {bind_lti_registration_to_account} from "./functions/bind_lti_registration_to_account"
import {list_lti_resource_links} from "./functions/list_lti_resource_links"
import {show_lti_resource_link} from "./functions/show_lti_resource_link"
import {create_lti_resource_link} from "./functions/create_lti_resource_link"
import {bulk_create_lti_resource_links} from "./functions/bulk_create_lti_resource_links"
import {update_lti_resource_link} from "./functions/update_lti_resource_link"
import {delete_lti_resource_link} from "./functions/delete_lti_resource_link"
import {list_media_tracks_for_media_object_or_attachment_media_objects} from "./functions/list_media_tracks_for_media_object_or_attachment_media_objects"
import {list_media_tracks_for_media_object_or_attachment_media_attachments} from "./functions/list_media_tracks_for_media_object_or_attachment_media_attachments"
import {update_media_tracks_media_objects} from "./functions/update_media_tracks_media_objects"
import {update_media_tracks_media_attachments} from "./functions/update_media_tracks_media_attachments"
import {list_media_objects_media_objects} from "./functions/list_media_objects_media_objects"
import {list_media_objects_courses_media_objects} from "./functions/list_media_objects_courses_media_objects"
import {list_media_objects_groups_media_objects} from "./functions/list_media_objects_groups_media_objects"
import {list_media_objects_media_attachments} from "./functions/list_media_objects_media_attachments"
import {list_media_objects_courses_media_attachments} from "./functions/list_media_objects_courses_media_attachments"
import {list_media_objects_groups_media_attachments} from "./functions/list_media_objects_groups_media_attachments"
import {update_media_object_media_objects} from "./functions/update_media_object_media_objects"
import {update_media_object_media_attachments} from "./functions/update_media_object_media_attachments"
import {list_students_selected_for_moderation} from "./functions/list_students_selected_for_moderation"
import {select_students_for_moderation} from "./functions/select_students_for_moderation"
import {bulk_select_provisional_grades} from "./functions/bulk_select_provisional_grades"
import {show_provisional_grade_status_for_student} from "./functions/show_provisional_grade_status_for_student"
import {select_provisional_grade} from "./functions/select_provisional_grade"
import {publish_provisional_grades_for_assignment} from "./functions/publish_provisional_grades_for_assignment"
import {list_modules} from "./functions/list_modules"
import {show_module} from "./functions/show_module"
import {create_module} from "./functions/create_module"
import {update_module} from "./functions/update_module"
import {delete_module} from "./functions/delete_module"
import {re_lock_module_progressions} from "./functions/re_lock_module_progressions"
import {list_module_items} from "./functions/list_module_items"
import {show_module_item} from "./functions/show_module_item"
import {create_module_item} from "./functions/create_module_item"
import {update_module_item} from "./functions/update_module_item"
import {select_mastery_path} from "./functions/select_mastery_path"
import {delete_module_item} from "./functions/delete_module_item"
import {mark_module_item_as_done_not_done} from "./functions/mark_module_item_as_done_not_done"
import {get_module_item_sequence} from "./functions/get_module_item_sequence"
import {mark_module_item_read} from "./functions/mark_module_item_read"
import {list_module_s_overrides} from "./functions/list_module_s_overrides"
import {update_module_s_overrides} from "./functions/update_module_s_overrides"
import {list_course_memberships} from "./functions/list_course_memberships"
import {get_quiz_item} from "./functions/get_quiz_item"
import {list_quiz_items} from "./functions/list_quiz_items"
import {create_quiz_item} from "./functions/create_quiz_item"
import {update_quiz_item} from "./functions/update_quiz_item"
import {delete_quiz_item} from "./functions/delete_quiz_item"
import {get_items_media_upload_url} from "./functions/get_items_media_upload_url"
import {get_new_quiz} from "./functions/get_new_quiz"
import {list_new_quizzes} from "./functions/list_new_quizzes"
import {create_new_quiz} from "./functions/create_new_quiz"
import {update_single_quiz} from "./functions/update_single_quiz"
import {delete_new_quiz} from "./functions/delete_new_quiz"
import {set_quiz_level_accommodations} from "./functions/set_quiz_level_accommodations"
import {set_course_level_accommodations} from "./functions/set_course_level_accommodations"
import {create_quiz_report} from "./functions/create_quiz_report"
import {list_preferences_communication_channel_id} from "./functions/list_preferences_communication_channel_id"
import {list_preferences_type} from "./functions/list_preferences_type"
import {list_of_preference_categories} from "./functions/list_of_preference_categories"
import {get_preference_communication_channel_id} from "./functions/get_preference_communication_channel_id"
import {get_preference_type} from "./functions/get_preference_type"
import {update_preference_communication_channel_id} from "./functions/update_preference_communication_channel_id"
import {update_preference_type} from "./functions/update_preference_type"
import {update_preferences_by_category} from "./functions/update_preferences_by_category"
import {update_multiple_preferences_communication_channel_id} from "./functions/update_multiple_preferences_communication_channel_id"
import {update_multiple_preferences_type} from "./functions/update_multiple_preferences_type"
import {create_originality_report} from "./functions/create_originality_report"
import {edit_originality_report_submissions} from "./functions/edit_originality_report_submissions"
import {edit_originality_report_files} from "./functions/edit_originality_report_files"
import {show_originality_report_submissions} from "./functions/show_originality_report_submissions"
import {show_originality_report_files} from "./functions/show_originality_report_files"
import {redirect_to_root_outcome_group_for_context_global} from "./functions/redirect_to_root_outcome_group_for_context_global"
import {redirect_to_root_outcome_group_for_context_accounts} from "./functions/redirect_to_root_outcome_group_for_context_accounts"
import {redirect_to_root_outcome_group_for_context_courses} from "./functions/redirect_to_root_outcome_group_for_context_courses"
import {get_all_outcome_groups_for_context_accounts} from "./functions/get_all_outcome_groups_for_context_accounts"
import {get_all_outcome_groups_for_context_courses} from "./functions/get_all_outcome_groups_for_context_courses"
import {get_all_outcome_links_for_context_accounts} from "./functions/get_all_outcome_links_for_context_accounts"
import {get_all_outcome_links_for_context_courses} from "./functions/get_all_outcome_links_for_context_courses"
import {show_outcome_group_global} from "./functions/show_outcome_group_global"
import {show_outcome_group_accounts} from "./functions/show_outcome_group_accounts"
import {show_outcome_group_courses} from "./functions/show_outcome_group_courses"
import {update_outcome_group_global} from "./functions/update_outcome_group_global"
import {update_outcome_group_accounts} from "./functions/update_outcome_group_accounts"
import {update_outcome_group_courses} from "./functions/update_outcome_group_courses"
import {delete_outcome_group_global} from "./functions/delete_outcome_group_global"
import {delete_outcome_group_accounts} from "./functions/delete_outcome_group_accounts"
import {delete_outcome_group_courses} from "./functions/delete_outcome_group_courses"
import {list_linked_outcomes_global} from "./functions/list_linked_outcomes_global"
import {list_linked_outcomes_accounts} from "./functions/list_linked_outcomes_accounts"
import {list_linked_outcomes_courses} from "./functions/list_linked_outcomes_courses"
import {create_link_outcome_global} from "./functions/create_link_outcome_global"
import {create_link_outcome_global_outcome_id} from "./functions/create_link_outcome_global_outcome_id"
import {create_link_outcome_accounts} from "./functions/create_link_outcome_accounts"
import {create_link_outcome_accounts_outcome_id} from "./functions/create_link_outcome_accounts_outcome_id"
import {create_link_outcome_courses} from "./functions/create_link_outcome_courses"
import {create_link_outcome_courses_outcome_id} from "./functions/create_link_outcome_courses_outcome_id"
import {unlink_outcome_global} from "./functions/unlink_outcome_global"
import {unlink_outcome_accounts} from "./functions/unlink_outcome_accounts"
import {unlink_outcome_courses} from "./functions/unlink_outcome_courses"
import {list_subgroups_global} from "./functions/list_subgroups_global"
import {list_subgroups_accounts} from "./functions/list_subgroups_accounts"
import {list_subgroups_courses} from "./functions/list_subgroups_courses"
import {create_subgroup_global} from "./functions/create_subgroup_global"
import {create_subgroup_accounts} from "./functions/create_subgroup_accounts"
import {create_subgroup_courses} from "./functions/create_subgroup_courses"
import {import_outcome_group_global} from "./functions/import_outcome_group_global"
import {import_outcome_group_accounts} from "./functions/import_outcome_group_accounts"
import {import_outcome_group_courses} from "./functions/import_outcome_group_courses"
import {import_outcomes_accounts} from "./functions/import_outcomes_accounts"
import {import_outcomes_courses} from "./functions/import_outcomes_courses"
import {get_outcome_import_status_accounts} from "./functions/get_outcome_import_status_accounts"
import {get_outcome_import_status_courses} from "./functions/get_outcome_import_status_courses"
import {get_ids_of_outcome_groups_created_after_successful_import_accounts} from "./functions/get_ids_of_outcome_groups_created_after_successful_import_accounts"
import {get_ids_of_outcome_groups_created_after_successful_import_courses} from "./functions/get_ids_of_outcome_groups_created_after_successful_import_courses"
import {get_outcome_results} from "./functions/get_outcome_results"
import {set_outcome_ordering_for_lmgb} from "./functions/set_outcome_ordering_for_lmgb"
import {get_outcome_result_rollups} from "./functions/get_outcome_result_rollups"
import {show_outcome} from "./functions/show_outcome"
import {update_outcome} from "./functions/update_outcome"
import {get_aligned_assignments_for_outcome_in_course_for_particular_student} from "./functions/get_aligned_assignments_for_outcome_in_course_for_particular_student"
import {show_front_page_courses} from "./functions/show_front_page_courses"
import {show_front_page_groups} from "./functions/show_front_page_groups"
import {duplicate_page} from "./functions/duplicate_page"
import {update_create_front_page_courses} from "./functions/update_create_front_page_courses"
import {update_create_front_page_groups} from "./functions/update_create_front_page_groups"
import {list_pages_courses} from "./functions/list_pages_courses"
import {list_pages_groups} from "./functions/list_pages_groups"
import {create_page_courses} from "./functions/create_page_courses"
import {create_page_groups} from "./functions/create_page_groups"
import {show_page_courses} from "./functions/show_page_courses"
import {show_page_groups} from "./functions/show_page_groups"
import {update_create_page_courses} from "./functions/update_create_page_courses"
import {update_create_page_groups} from "./functions/update_create_page_groups"
import {delete_page_courses} from "./functions/delete_page_courses"
import {delete_page_groups} from "./functions/delete_page_groups"
import {list_revisions_courses} from "./functions/list_revisions_courses"
import {list_revisions_groups} from "./functions/list_revisions_groups"
import {show_revision_courses_latest} from "./functions/show_revision_courses_latest"
import {show_revision_groups_latest} from "./functions/show_revision_groups_latest"
import {show_revision_courses_revision_id} from "./functions/show_revision_courses_revision_id"
import {show_revision_groups_revision_id} from "./functions/show_revision_groups_revision_id"
import {revert_to_revision_courses} from "./functions/revert_to_revision_courses"
import {revert_to_revision_groups} from "./functions/revert_to_revision_groups"
import {get_all_peer_reviews_courses_peer_reviews} from "./functions/get_all_peer_reviews_courses_peer_reviews"
import {get_all_peer_reviews_sections_peer_reviews} from "./functions/get_all_peer_reviews_sections_peer_reviews"
import {get_all_peer_reviews_courses_submissions} from "./functions/get_all_peer_reviews_courses_submissions"
import {get_all_peer_reviews_sections_submissions} from "./functions/get_all_peer_reviews_sections_submissions"
import {create_peer_review_courses} from "./functions/create_peer_review_courses"
import {create_peer_review_sections} from "./functions/create_peer_review_sections"
import {delete_peer_review_courses} from "./functions/delete_peer_review_courses"
import {delete_peer_review_sections} from "./functions/delete_peer_review_sections"
import {get_single_assignment_lti} from "./functions/get_single_assignment_lti"
import {get_single_user_lti} from "./functions/get_single_user_lti"
import {get_all_users_in_group_lti} from "./functions/get_all_users_in_group_lti"
import {get_single_submission} from "./functions/get_single_submission"
import {get_history_of_single_submission} from "./functions/get_history_of_single_submission"
import {list_planner_items_planner} from "./functions/list_planner_items_planner"
import {list_planner_items_users} from "./functions/list_planner_items_users"
import {list_planner_notes} from "./functions/list_planner_notes"
import {show_planner_note} from "./functions/show_planner_note"
import {update_planner_note} from "./functions/update_planner_note"
import {create_planner_note} from "./functions/create_planner_note"
import {delete_planner_note} from "./functions/delete_planner_note"
import {list_planner_overrides} from "./functions/list_planner_overrides"
import {show_planner_override} from "./functions/show_planner_override"
import {update_planner_override} from "./functions/update_planner_override"
import {create_planner_override} from "./functions/create_planner_override"
import {delete_planner_override} from "./functions/delete_planner_override"
import {list_poll_choices_in_poll} from "./functions/list_poll_choices_in_poll"
import {get_single_poll_choice} from "./functions/get_single_poll_choice"
import {create_single_poll_choice} from "./functions/create_single_poll_choice"
import {update_single_poll_choice} from "./functions/update_single_poll_choice"
import {delete_poll_choice} from "./functions/delete_poll_choice"
import {list_poll_sessions_for_poll} from "./functions/list_poll_sessions_for_poll"
import {get_results_for_single_poll_session} from "./functions/get_results_for_single_poll_session"
import {create_single_poll_session} from "./functions/create_single_poll_session"
import {update_single_poll_session} from "./functions/update_single_poll_session"
import {delete_poll_session} from "./functions/delete_poll_session"
import {open_poll_session} from "./functions/open_poll_session"
import {close_opened_poll_session} from "./functions/close_opened_poll_session"
import {list_opened_poll_sessions} from "./functions/list_opened_poll_sessions"
import {list_closed_poll_sessions} from "./functions/list_closed_poll_sessions"
import {get_single_poll_submission} from "./functions/get_single_poll_submission"
import {create_single_poll_submission} from "./functions/create_single_poll_submission"
import {list_polls} from "./functions/list_polls"
import {get_single_poll} from "./functions/get_single_poll"
import {create_single_poll} from "./functions/create_single_poll"
import {update_single_poll} from "./functions/update_single_poll"
import {delete_poll} from "./functions/delete_poll"
import {create_update_proficiency_ratings_accounts} from "./functions/create_update_proficiency_ratings_accounts"
import {create_update_proficiency_ratings_courses} from "./functions/create_update_proficiency_ratings_courses"
import {get_proficiency_ratings_accounts} from "./functions/get_proficiency_ratings_accounts"
import {get_proficiency_ratings_courses} from "./functions/get_proficiency_ratings_courses"
import {query_progress} from "./functions/query_progress"
import {cancel_progress} from "./functions/cancel_progress"
import {update_public_jwk} from "./functions/update_public_jwk"
import {retrieve_assignment_overridden_dates_for_classic_quizzes} from "./functions/retrieve_assignment_overridden_dates_for_classic_quizzes"
import {retrieve_assignment_overridden_dates_for_new_quizzes} from "./functions/retrieve_assignment_overridden_dates_for_new_quizzes"
import {get_available_quiz_ip_filters} from "./functions/get_available_quiz_ip_filters"
import {get_single_quiz_group} from "./functions/get_single_quiz_group"
import {create_question_group} from "./functions/create_question_group"
import {update_question_group} from "./functions/update_question_group"
import {delete_question_group} from "./functions/delete_question_group"
import {reorder_question_groups} from "./functions/reorder_question_groups"
import {list_questions_in_quiz_or_submission} from "./functions/list_questions_in_quiz_or_submission"
import {get_single_quiz_question} from "./functions/get_single_quiz_question"
import {create_single_quiz_question} from "./functions/create_single_quiz_question"
import {update_existing_quiz_question} from "./functions/update_existing_quiz_question"
import {delete_quiz_question} from "./functions/delete_quiz_question"
import {retrieve_all_quiz_reports} from "./functions/retrieve_all_quiz_reports"
import {get_quiz_report} from "./functions/get_quiz_report"
import {abort_generation_of_report_or_remove_previously_generated_one} from "./functions/abort_generation_of_report_or_remove_previously_generated_one"
import {fetching_latest_quiz_statistics} from "./functions/fetching_latest_quiz_statistics"
import {submit_captured_events} from "./functions/submit_captured_events"
import {retrieve_captured_events} from "./functions/retrieve_captured_events"
import {get_all_quiz_submission_questions} from "./functions/get_all_quiz_submission_questions"
import {answering_questions} from "./functions/answering_questions"
import {get_formatted_student_numerical_answer} from "./functions/get_formatted_student_numerical_answer"
import {flagging_question} from "./functions/flagging_question"
import {unflagging_question} from "./functions/unflagging_question"
import {send_message_to_unsubmitted_or_submitted_users_for_quiz} from "./functions/send_message_to_unsubmitted_or_submitted_users_for_quiz"
import {get_all_quiz_submissions} from "./functions/get_all_quiz_submissions"
import {get_quiz_submission} from "./functions/get_quiz_submission"
import {get_single_quiz_submission} from "./functions/get_single_quiz_submission"
import {create_quiz_submission_start_quiz_taking_session} from "./functions/create_quiz_submission_start_quiz_taking_session"
import {update_student_question_scores_and_comments} from "./functions/update_student_question_scores_and_comments"
import {complete_quiz_submission_turn_it_in} from "./functions/complete_quiz_submission_turn_it_in"
import {get_current_quiz_submission_times} from "./functions/get_current_quiz_submission_times"
import {list_quizzes_in_course} from "./functions/list_quizzes_in_course"
import {get_single_quiz} from "./functions/get_single_quiz"
import {create_quiz} from "./functions/create_quiz"
import {edit_quiz} from "./functions/edit_quiz"
import {delete_quiz} from "./functions/delete_quiz"
import {reorder_quiz_items} from "./functions/reorder_quiz_items"
import {validate_quiz_access_code} from "./functions/validate_quiz_access_code"
import {show_collection_of_results} from "./functions/show_collection_of_results"
import {show_result} from "./functions/show_result"
import {list_roles} from "./functions/list_roles"
import {get_single_role} from "./functions/get_single_role"
import {create_new_role} from "./functions/create_new_role"
import {deactivate_role} from "./functions/deactivate_role"
import {activate_role} from "./functions/activate_role"
import {update_role} from "./functions/update_role"
import {create_single_rubric} from "./functions/create_single_rubric"
import {update_single_rubric} from "./functions/update_single_rubric"
import {delete_single} from "./functions/delete_single"
import {list_rubrics_accounts} from "./functions/list_rubrics_accounts"
import {list_rubrics_courses} from "./functions/list_rubrics_courses"
import {get_single_rubric_accounts} from "./functions/get_single_rubric_accounts"
import {get_single_rubric_courses} from "./functions/get_single_rubric_courses"
import {get_courses_and_assignments_for_courses} from "./functions/get_courses_and_assignments_for_courses"
import {get_courses_and_assignments_for_accounts} from "./functions/get_courses_and_assignments_for_accounts"
import {creates_rubric_using_csv_file_courses} from "./functions/creates_rubric_using_csv_file_courses"
import {creates_rubric_using_csv_file_accounts} from "./functions/creates_rubric_using_csv_file_accounts"
import {templated_file_for_importing_rubric} from "./functions/templated_file_for_importing_rubric"
import {get_status_of_rubric_import_courses} from "./functions/get_status_of_rubric_import_courses"
import {get_status_of_rubric_import_accounts} from "./functions/get_status_of_rubric_import_accounts"
import {create_single_rubric_assessment} from "./functions/create_single_rubric_assessment"
import {update_single_rubric_assessment} from "./functions/update_single_rubric_assessment"
import {delete_single_rubric_assessment} from "./functions/delete_single_rubric_assessment"
import {create_rubricassociation} from "./functions/create_rubricassociation"
import {update_rubricassociation} from "./functions/update_rubricassociation"
import {delete_rubricassociation} from "./functions/delete_rubricassociation"
import {download_uuid_mapping_for_this_sandbox} from "./functions/download_uuid_mapping_for_this_sandbox"
import {create_score} from "./functions/create_score"
import {find_recipients_conversations} from "./functions/find_recipients_conversations"
import {find_recipients_search} from "./functions/find_recipients_search"
import {list_all_courses} from "./functions/list_all_courses"
import {list_course_sections} from "./functions/list_course_sections"
import {create_course_section} from "./functions/create_course_section"
import {cross_list_section} from "./functions/cross_list_section"
import {de_cross_list_section} from "./functions/de_cross_list_section"
import {edit_section} from "./functions/edit_section"
import {get_section_information_courses} from "./functions/get_section_information_courses"
import {get_section_information_sections} from "./functions/get_section_information_sections"
import {delete_section} from "./functions/delete_section"
import {get_kaltura_config} from "./functions/get_kaltura_config"
import {start_kaltura_session} from "./functions/start_kaltura_session"
import {share_brandconfig_theme} from "./functions/share_brandconfig_theme"
import {update_shared_theme} from "./functions/update_shared_theme"
import {un_share_brandconfig_theme} from "./functions/un_share_brandconfig_theme"
import {get_sis_import_error_list_sis_imports} from "./functions/get_sis_import_error_list_sis_imports"
import {get_sis_import_error_list_sis_import_errors} from "./functions/get_sis_import_error_list_sis_import_errors"
import {get_sis_import_list} from "./functions/get_sis_import_list"
import {get_current_importing_sis_import} from "./functions/get_current_importing_sis_import"
import {import_sis_data} from "./functions/import_sis_data"
import {get_sis_import_status} from "./functions/get_sis_import_status"
import {restore_workflow_states_of_sis_imported_items} from "./functions/restore_workflow_states_of_sis_imported_items"
import {abort_sis_import} from "./functions/abort_sis_import"
import {abort_all_pending_sis_imports} from "./functions/abort_all_pending_sis_imports"
import {retrieve_assignments_enabled_for_grade_export_to_sis_accounts} from "./functions/retrieve_assignments_enabled_for_grade_export_to_sis_accounts"
import {retrieve_assignments_enabled_for_grade_export_to_sis_courses} from "./functions/retrieve_assignments_enabled_for_grade_export_to_sis_courses"
import {disable_assignments_currently_enabled_for_grade_export_to_sis} from "./functions/disable_assignments_currently_enabled_for_grade_export_to_sis"
import {search_course_content} from "./functions/search_course_content"
import {edit_submission_comment} from "./functions/edit_submission_comment"
import {delete_submission_comment} from "./functions/delete_submission_comment"
import {submit_assignment_courses} from "./functions/submit_assignment_courses"
import {submit_assignment_sections} from "./functions/submit_assignment_sections"
import {list_assignment_submissions_courses} from "./functions/list_assignment_submissions_courses"
import {list_assignment_submissions_sections} from "./functions/list_assignment_submissions_sections"
import {list_submissions_for_multiple_assignments_courses} from "./functions/list_submissions_for_multiple_assignments_courses"
import {list_submissions_for_multiple_assignments_sections} from "./functions/list_submissions_for_multiple_assignments_sections"
import {get_single_submission_courses} from "./functions/get_single_submission_courses"
import {get_single_submission_sections} from "./functions/get_single_submission_sections"
import {get_single_submission_by_anonymous_id_courses} from "./functions/get_single_submission_by_anonymous_id_courses"
import {get_single_submission_by_anonymous_id_sections} from "./functions/get_single_submission_by_anonymous_id_sections"
import {upload_file_courses} from "./functions/upload_file_courses"
import {upload_file_sections} from "./functions/upload_file_sections"
import {grade_or_comment_on_submission_courses} from "./functions/grade_or_comment_on_submission_courses"
import {grade_or_comment_on_submission_sections} from "./functions/grade_or_comment_on_submission_sections"
import {grade_or_comment_on_submission_by_anonymous_id_courses} from "./functions/grade_or_comment_on_submission_by_anonymous_id_courses"
import {grade_or_comment_on_submission_by_anonymous_id_sections} from "./functions/grade_or_comment_on_submission_by_anonymous_id_sections"
import {list_gradeable_students} from "./functions/list_gradeable_students"
import {list_multiple_assignments_gradeable_students} from "./functions/list_multiple_assignments_gradeable_students"
import {grade_or_comment_on_multiple_submissions_courses_submissions} from "./functions/grade_or_comment_on_multiple_submissions_courses_submissions"
import {grade_or_comment_on_multiple_submissions_courses_assignments} from "./functions/grade_or_comment_on_multiple_submissions_courses_assignments"
import {grade_or_comment_on_multiple_submissions_sections_submissions} from "./functions/grade_or_comment_on_multiple_submissions_sections_submissions"
import {grade_or_comment_on_multiple_submissions_sections_assignments} from "./functions/grade_or_comment_on_multiple_submissions_sections_assignments"
import {mark_submission_as_read_courses} from "./functions/mark_submission_as_read_courses"
import {mark_submission_as_read_sections} from "./functions/mark_submission_as_read_sections"
import {mark_submission_as_unread_courses} from "./functions/mark_submission_as_unread_courses"
import {mark_submission_as_unread_sections} from "./functions/mark_submission_as_unread_sections"
import {mark_bulk_submissions_as_read_courses} from "./functions/mark_bulk_submissions_as_read_courses"
import {mark_bulk_submissions_as_read_sections} from "./functions/mark_bulk_submissions_as_read_sections"
import {mark_submission_item_as_read_courses} from "./functions/mark_submission_item_as_read_courses"
import {mark_submission_item_as_read_sections} from "./functions/mark_submission_item_as_read_sections"
import {clear_unread_status_for_all_submissions_courses} from "./functions/clear_unread_status_for_all_submissions_courses"
import {clear_unread_status_for_all_submissions_sections} from "./functions/clear_unread_status_for_all_submissions_sections"
import {get_rubric_assessments_read_state_courses_rubric_comments} from "./functions/get_rubric_assessments_read_state_courses_rubric_comments"
import {get_rubric_assessments_read_state_courses_rubric_assessments} from "./functions/get_rubric_assessments_read_state_courses_rubric_assessments"
import {get_rubric_assessments_read_state_sections_rubric_comments} from "./functions/get_rubric_assessments_read_state_sections_rubric_comments"
import {get_rubric_assessments_read_state_sections_rubric_assessments} from "./functions/get_rubric_assessments_read_state_sections_rubric_assessments"
import {mark_rubric_assessments_as_read_courses_rubric_comments} from "./functions/mark_rubric_assessments_as_read_courses_rubric_comments"
import {mark_rubric_assessments_as_read_courses_rubric_assessments} from "./functions/mark_rubric_assessments_as_read_courses_rubric_assessments"
import {mark_rubric_assessments_as_read_sections_rubric_comments} from "./functions/mark_rubric_assessments_as_read_sections_rubric_comments"
import {mark_rubric_assessments_as_read_sections_rubric_assessments} from "./functions/mark_rubric_assessments_as_read_sections_rubric_assessments"
import {get_document_annotations_read_state_courses} from "./functions/get_document_annotations_read_state_courses"
import {get_document_annotations_read_state_sections} from "./functions/get_document_annotations_read_state_sections"
import {mark_document_annotations_as_read_courses} from "./functions/mark_document_annotations_as_read_courses"
import {mark_document_annotations_as_read_sections} from "./functions/mark_document_annotations_as_read_sections"
import {submission_summary_courses} from "./functions/submission_summary_courses"
import {submission_summary_sections} from "./functions/submission_summary_sections"
import {list_available_tabs_for_course_or_group_accounts} from "./functions/list_available_tabs_for_course_or_group_accounts"
import {list_available_tabs_for_course_or_group_courses} from "./functions/list_available_tabs_for_course_or_group_courses"
import {list_available_tabs_for_course_or_group_groups} from "./functions/list_available_tabs_for_course_or_group_groups"
import {list_available_tabs_for_course_or_group_users} from "./functions/list_available_tabs_for_course_or_group_users"
import {update_tab_for_course} from "./functions/update_tab_for_course"
import {list_temporary_enrollment_pairings} from "./functions/list_temporary_enrollment_pairings"
import {get_single_temporary_enrollment_pairing} from "./functions/get_single_temporary_enrollment_pairing"
import {new_temporaryenrollmentpairing} from "./functions/new_temporaryenrollmentpairing"
import {create_temporary_enrollment_pairing} from "./functions/create_temporary_enrollment_pairing"
import {delete_temporary_enrollment_pairing} from "./functions/delete_temporary_enrollment_pairing"
import {list_observees} from "./functions/list_observees"
import {list_observers} from "./functions/list_observers"
import {add_observee_with_credentials} from "./functions/add_observee_with_credentials"
import {show_observee} from "./functions/show_observee"
import {show_observer} from "./functions/show_observer"
import {add_observee} from "./functions/add_observee"
import {remove_observee} from "./functions/remove_observee"
import {create_observer_pairing_code} from "./functions/create_observer_pairing_code"
import {list_users_in_account} from "./functions/list_users_in_account"
import {list_activity_stream_self} from "./functions/list_activity_stream_self"
import {list_activity_stream_activity_stream} from "./functions/list_activity_stream_activity_stream"
import {activity_stream_summary} from "./functions/activity_stream_summary"
import {list_todo_items} from "./functions/list_todo_items"
import {list_counts_for_todo_items} from "./functions/list_counts_for_todo_items"
import {list_upcoming_assignments_calendar_events} from "./functions/list_upcoming_assignments_calendar_events"
import {list_missing_submissions} from "./functions/list_missing_submissions"
import {hide_stream_item} from "./functions/hide_stream_item"
import {hide_all_stream_items} from "./functions/hide_all_stream_items"
import {show_user_details} from "./functions/show_user_details"
import {create_user} from "./functions/create_user"
import {deprecated_self_register_user} from "./functions/deprecated_self_register_user"
import {update_user_settings} from "./functions/update_user_settings"
import {get_custom_colors} from "./functions/get_custom_colors"
import {get_custom_color} from "./functions/get_custom_color"
import {update_custom_color} from "./functions/update_custom_color"
import {update_text_editor_preference} from "./functions/update_text_editor_preference"
import {get_dashboard_positions} from "./functions/get_dashboard_positions"
import {update_dashboard_positions} from "./functions/update_dashboard_positions"
import {edit_user} from "./functions/edit_user"
import {terminate_all_user_sessions} from "./functions/terminate_all_user_sessions"
import {log_users_out_of_all_mobile_apps_mobile_sessions} from "./functions/log_users_out_of_all_mobile_apps_mobile_sessions"
import {log_users_out_of_all_mobile_apps_id} from "./functions/log_users_out_of_all_mobile_apps_id"
import {merge_user_into_another_user_destination_user_id} from "./functions/merge_user_into_another_user_destination_user_id"
import {merge_user_into_another_user_accounts} from "./functions/merge_user_into_another_user_accounts"
import {split_merged_users_into_separate_users} from "./functions/split_merged_users_into_separate_users"
import {get_pandata_events_jwt_token_and_its_expiration_date} from "./functions/get_pandata_events_jwt_token_and_its_expiration_date"
import {get_users_most_recently_graded_submissions} from "./functions/get_users_most_recently_graded_submissions"
import {get_user_profile} from "./functions/get_user_profile"
import {list_avatar_options} from "./functions/list_avatar_options"
import {list_user_page_views} from "./functions/list_user_page_views"
import {store_custom_data} from "./functions/store_custom_data"
import {load_custom_data} from "./functions/load_custom_data"
import {delete_custom_data} from "./functions/delete_custom_data"
import {list_course_nicknames} from "./functions/list_course_nicknames"
import {get_course_nickname} from "./functions/get_course_nickname"
import {set_course_nickname} from "./functions/set_course_nickname"
import {remove_course_nickname} from "./functions/remove_course_nickname"
import {clear_course_nicknames} from "./functions/clear_course_nicknames"
import {create_webhook_subscription} from "./functions/create_webhook_subscription"
import {delete_webhook_subscription} from "./functions/delete_webhook_subscription"
import {show_single_webhook_subscription} from "./functions/show_single_webhook_subscription"
import {update_webhook_subscription} from "./functions/update_webhook_subscription"
import {list_all_webhook_subscription_for_tool_proxy} from "./functions/list_all_webhook_subscription_for_tool_proxy"
import {update_submission_s_what_if_score_and_calculate_grades} from "./functions/update_submission_s_what_if_score_and_calculate_grades"
import {reset_what_if_scores_for_current_user_for_entire_course_and_recalculate_grades} from "./functions/reset_what_if_scores_for_current_user_for_entire_course_and_recalculate_grades"

export class CanvasLMS {
  token: string;
  domain: string;

  constructor(args: { domain: string; accessToken: string }) {
    this.token = args.accessToken;
    this.domain = args.domain;
  }

  
  showAccessToken(args: Parameters<typeof show_access_token>[2]) {
  return show_access_token(this.token, this.domain, args);
}

  createAccessToken(args: Parameters<typeof create_access_token>[2]) {
  return create_access_token(this.token, this.domain, args);
}

  updateAccessToken(args: Parameters<typeof update_access_token>[2]) {
  return update_access_token(this.token, this.domain, args);
}

  deleteAccessToken(args: Parameters<typeof delete_access_token>[2]) {
  return delete_access_token(this.token, this.domain, args);
}

  listAvailableAccountCalendars(args: Parameters<typeof list_available_account_calendars>[2]) {
  return list_available_account_calendars(this.token, this.domain, args);
}

  getSingleAccountCalendar(args: Parameters<typeof get_single_account_calendar>[2]) {
  return get_single_account_calendar(this.token, this.domain, args);
}

  updateCalendar(args: Parameters<typeof update_calendar>[2]) {
  return update_calendar(this.token, this.domain, args);
}

  updateSeveralCalendars(args: Parameters<typeof update_several_calendars>[2]) {
  return update_several_calendars(this.token, this.domain, args);
}

  listAllAccountCalendars(args: Parameters<typeof list_all_account_calendars>[2]) {
  return list_all_account_calendars(this.token, this.domain, args);
}

  countOfAllVisibleAccountCalendars(args: Parameters<typeof count_of_all_visible_account_calendars>[2]) {
  return count_of_all_visible_account_calendars(this.token, this.domain, args);
}

  searchAccountDomains(args: Parameters<typeof search_account_domains>[2]) {
  return search_account_domains(this.token, this.domain, args);
}

  indexOfActiveGlobalNotificationForUser(args: Parameters<typeof index_of_active_global_notification_for_user>[2]) {
  return index_of_active_global_notification_for_user(this.token, this.domain, args);
}

  showGlobalNotification(args: Parameters<typeof show_global_notification>[2]) {
  return show_global_notification(this.token, this.domain, args);
}

  createGlobalNotification(args: Parameters<typeof create_global_notification>[2]) {
  return create_global_notification(this.token, this.domain, args);
}

  updateGlobalNotification(args: Parameters<typeof update_global_notification>[2]) {
  return update_global_notification(this.token, this.domain, args);
}

  closeNotificationForUserDestroyNotificationForAdmin(args: Parameters<typeof close_notification_for_user_destroy_notification_for_admin>[2]) {
  return close_notification_for_user_destroy_notification_for_admin(this.token, this.domain, args);
}

  listAvailableReports(args: Parameters<typeof list_available_reports>[2]) {
  return list_available_reports(this.token, this.domain, args);
}

  startReport(args: Parameters<typeof start_report>[2]) {
  return start_report(this.token, this.domain, args);
}

  indexOfReports(args: Parameters<typeof index_of_reports>[2]) {
  return index_of_reports(this.token, this.domain, args);
}

  statusOfReport(args: Parameters<typeof status_of_report>[2]) {
  return status_of_report(this.token, this.domain, args);
}

  deleteReport(args: Parameters<typeof delete_report>[2]) {
  return delete_report(this.token, this.domain, args);
}

  abortReport(args: Parameters<typeof abort_report>[2]) {
  return abort_report(this.token, this.domain, args);
}

  listAccounts(args: Parameters<typeof list_accounts>[2]) {
  return list_accounts(this.token, this.domain, args);
}

  getAccountsThatAdminsCanManage(args: Parameters<typeof get_accounts_that_admins_can_manage>[2]) {
  return get_accounts_that_admins_can_manage(this.token, this.domain, args);
}

  getAccountsThatUsersCanCreateCoursesIn(args: Parameters<typeof get_accounts_that_users_can_create_courses_in>[2]) {
  return get_accounts_that_users_can_create_courses_in(this.token, this.domain, args);
}

  listAccountsForCourseAdmins(args: Parameters<typeof list_accounts_for_course_admins>[2]) {
  return list_accounts_for_course_admins(this.token, this.domain, args);
}

  getSingleAccount(args: Parameters<typeof get_single_account>[2]) {
  return get_single_account(this.token, this.domain, args);
}

  settings(args: Parameters<typeof settings>[2]) {
  return settings(this.token, this.domain, args);
}

  listEnvironmentSettings(args: Parameters<typeof list_environment_settings>[2]) {
  return list_environment_settings(this.token, this.domain, args);
}

  permissions(args: Parameters<typeof permissions>[2]) {
  return permissions(this.token, this.domain, args);
}

  getSubAccountsOfAccount(args: Parameters<typeof get_sub_accounts_of_account>[2]) {
  return get_sub_accounts_of_account(this.token, this.domain, args);
}

  getTermsOfService(args: Parameters<typeof get_terms_of_service>[2]) {
  return get_terms_of_service(this.token, this.domain, args);
}

  getHelpLinks(args: Parameters<typeof get_help_links>[2]) {
  return get_help_links(this.token, this.domain, args);
}

  getManuallyCreatedCoursesSubAccountForDomainRootAccount(args: Parameters<typeof get_manually_created_courses_sub_account_for_domain_root_account>[2]) {
  return get_manually_created_courses_sub_account_for_domain_root_account(this.token, this.domain, args);
}

  listActiveCoursesInAccount(args: Parameters<typeof list_active_courses_in_account>[2]) {
  return list_active_courses_in_account(this.token, this.domain, args);
}

  updateAccount(args: Parameters<typeof update_account>[2]) {
  return update_account(this.token, this.domain, args);
}

  deleteUserFromRootAccount(args: Parameters<typeof delete_user_from_root_account>[2]) {
  return delete_user_from_root_account(this.token, this.domain, args);
}

  restoreDeletedUserFromRootAccount(args: Parameters<typeof restore_deleted_user_from_root_account>[2]) {
  return restore_deleted_user_from_root_account(this.token, this.domain, args);
}

  createNewSubAccount(args: Parameters<typeof create_new_sub_account>[2]) {
  return create_new_sub_account(this.token, this.domain, args);
}

  deleteSubAccount(args: Parameters<typeof delete_sub_account>[2]) {
  return delete_sub_account(this.token, this.domain, args);
}

  getAccount(args: Parameters<typeof get_account>[2]) {
  return get_account(this.token, this.domain, args);
}

  makeAccountAdmin(args: Parameters<typeof make_account_admin>[2]) {
  return make_account_admin(this.token, this.domain, args);
}

  removeAccountAdmin(args: Parameters<typeof remove_account_admin>[2]) {
  return remove_account_admin(this.token, this.domain, args);
}

  listAccountAdmins(args: Parameters<typeof list_account_admins>[2]) {
  return list_account_admins(this.token, this.domain, args);
}

  listMyAdminRoles(args: Parameters<typeof list_my_admin_roles>[2]) {
  return list_my_admin_roles(this.token, this.domain, args);
}

  getDepartmentLevelParticipationDataTerms(args: Parameters<typeof get_department_level_participation_data_terms>[2]) {
  return get_department_level_participation_data_terms(this.token, this.domain, args);
}

  getDepartmentLevelParticipationDataCurrent(args: Parameters<typeof get_department_level_participation_data_current>[2]) {
  return get_department_level_participation_data_current(this.token, this.domain, args);
}

  getDepartmentLevelParticipationDataCompleted(args: Parameters<typeof get_department_level_participation_data_completed>[2]) {
  return get_department_level_participation_data_completed(this.token, this.domain, args);
}

  getDepartmentLevelGradeDataTerms(args: Parameters<typeof get_department_level_grade_data_terms>[2]) {
  return get_department_level_grade_data_terms(this.token, this.domain, args);
}

  getDepartmentLevelGradeDataCurrent(args: Parameters<typeof get_department_level_grade_data_current>[2]) {
  return get_department_level_grade_data_current(this.token, this.domain, args);
}

  getDepartmentLevelGradeDataCompleted(args: Parameters<typeof get_department_level_grade_data_completed>[2]) {
  return get_department_level_grade_data_completed(this.token, this.domain, args);
}

  getDepartmentLevelStatisticsTerms(args: Parameters<typeof get_department_level_statistics_terms>[2]) {
  return get_department_level_statistics_terms(this.token, this.domain, args);
}

  getDepartmentLevelStatisticsCurrent(args: Parameters<typeof get_department_level_statistics_current>[2]) {
  return get_department_level_statistics_current(this.token, this.domain, args);
}

  getDepartmentLevelStatisticsCompleted(args: Parameters<typeof get_department_level_statistics_completed>[2]) {
  return get_department_level_statistics_completed(this.token, this.domain, args);
}

  getDepartmentLevelStatisticsBrokenDownBySubaccountTerms(args: Parameters<typeof get_department_level_statistics_broken_down_by_subaccount_terms>[2]) {
  return get_department_level_statistics_broken_down_by_subaccount_terms(this.token, this.domain, args);
}

  getDepartmentLevelStatisticsBrokenDownBySubaccountCurrent(args: Parameters<typeof get_department_level_statistics_broken_down_by_subaccount_current>[2]) {
  return get_department_level_statistics_broken_down_by_subaccount_current(this.token, this.domain, args);
}

  getDepartmentLevelStatisticsBrokenDownBySubaccountCompleted(args: Parameters<typeof get_department_level_statistics_broken_down_by_subaccount_completed>[2]) {
  return get_department_level_statistics_broken_down_by_subaccount_completed(this.token, this.domain, args);
}

  getCourseLevelParticipationData(args: Parameters<typeof get_course_level_participation_data>[2]) {
  return get_course_level_participation_data(this.token, this.domain, args);
}

  getCourseLevelAssignmentData(args: Parameters<typeof get_course_level_assignment_data>[2]) {
  return get_course_level_assignment_data(this.token, this.domain, args);
}

  getCourseLevelStudentSummaryData(args: Parameters<typeof get_course_level_student_summary_data>[2]) {
  return get_course_level_student_summary_data(this.token, this.domain, args);
}

  getUserInACourseLevelParticipationData(args: Parameters<typeof get_user_in_a_course_level_participation_data>[2]) {
  return get_user_in_a_course_level_participation_data(this.token, this.domain, args);
}

  getUserInACourseLevelAssignmentData(args: Parameters<typeof get_user_in_a_course_level_assignment_data>[2]) {
  return get_user_in_a_course_level_assignment_data(this.token, this.domain, args);
}

  getUserInACourseLevelMessagingData(args: Parameters<typeof get_user_in_a_course_level_messaging_data>[2]) {
  return get_user_in_a_course_level_messaging_data(this.token, this.domain, args);
}

  listExternalFeedsCourses(args: Parameters<typeof list_external_feeds_courses>[2]) {
  return list_external_feeds_courses(this.token, this.domain, args);
}

  listExternalFeedsGroups(args: Parameters<typeof list_external_feeds_groups>[2]) {
  return list_external_feeds_groups(this.token, this.domain, args);
}

  createExternalFeedCourses(args: Parameters<typeof create_external_feed_courses>[2]) {
  return create_external_feed_courses(this.token, this.domain, args);
}

  createExternalFeedGroups(args: Parameters<typeof create_external_feed_groups>[2]) {
  return create_external_feed_groups(this.token, this.domain, args);
}

  deleteExternalFeedCourses(args: Parameters<typeof delete_external_feed_courses>[2]) {
  return delete_external_feed_courses(this.token, this.domain, args);
}

  deleteExternalFeedGroups(args: Parameters<typeof delete_external_feed_groups>[2]) {
  return delete_external_feed_groups(this.token, this.domain, args);
}

  listAnnouncements(args: Parameters<typeof list_announcements>[2]) {
  return list_announcements(this.token, this.domain, args);
}

  listScopes(args: Parameters<typeof list_scopes>[2]) {
  return list_scopes(this.token, this.domain, args);
}

  listAppointmentGroups(args: Parameters<typeof list_appointment_groups>[2]) {
  return list_appointment_groups(this.token, this.domain, args);
}

  createAppointmentGroup(args: Parameters<typeof create_appointment_group>[2]) {
  return create_appointment_group(this.token, this.domain, args);
}

  getSingleAppointmentGroup(args: Parameters<typeof get_single_appointment_group>[2]) {
  return get_single_appointment_group(this.token, this.domain, args);
}

  updateAppointmentGroup(args: Parameters<typeof update_appointment_group>[2]) {
  return update_appointment_group(this.token, this.domain, args);
}

  deleteAppointmentGroup(args: Parameters<typeof delete_appointment_group>[2]) {
  return delete_appointment_group(this.token, this.domain, args);
}

  listUserParticipants(args: Parameters<typeof list_user_participants>[2]) {
  return list_user_participants(this.token, this.domain, args);
}

  listStudentGroupParticipants(args: Parameters<typeof list_student_group_participants>[2]) {
  return list_student_group_participants(this.token, this.domain, args);
}

  getNextAppointment(args: Parameters<typeof get_next_appointment>[2]) {
  return get_next_appointment(this.token, this.domain, args);
}

  setExtensionsForStudentAssignmentSubmissions(args: Parameters<typeof set_extensions_for_student_assignment_submissions>[2]) {
  return set_extensions_for_student_assignment_submissions(this.token, this.domain, args);
}

  listAssignmentGroups(args: Parameters<typeof list_assignment_groups>[2]) {
  return list_assignment_groups(this.token, this.domain, args);
}

  getAssignmentGroup(args: Parameters<typeof get_assignment_group>[2]) {
  return get_assignment_group(this.token, this.domain, args);
}

  createAssignmentGroup(args: Parameters<typeof create_assignment_group>[2]) {
  return create_assignment_group(this.token, this.domain, args);
}

  editAssignmentGroup(args: Parameters<typeof edit_assignment_group>[2]) {
  return edit_assignment_group(this.token, this.domain, args);
}

  destroyAssignmentGroup(args: Parameters<typeof destroy_assignment_group>[2]) {
  return destroy_assignment_group(this.token, this.domain, args);
}

  deleteAssignment(args: Parameters<typeof delete_assignment>[2]) {
  return delete_assignment(this.token, this.domain, args);
}

  listAssignmentsAssignments(args: Parameters<typeof list_assignments_assignments>[2]) {
  return list_assignments_assignments(this.token, this.domain, args);
}

  listAssignmentsAssignmentGroups(args: Parameters<typeof list_assignments_assignment_groups>[2]) {
  return list_assignments_assignment_groups(this.token, this.domain, args);
}

  listAssignmentsForUser(args: Parameters<typeof list_assignments_for_user>[2]) {
  return list_assignments_for_user(this.token, this.domain, args);
}

  duplicateAssignment(args: Parameters<typeof duplicate_assignment>[2]) {
  return duplicate_assignment(this.token, this.domain, args);
}

  listGroupMembersForStudentOnAssignment(args: Parameters<typeof list_group_members_for_student_on_assignment>[2]) {
  return list_group_members_for_student_on_assignment(this.token, this.domain, args);
}

  getSingleAssignment(args: Parameters<typeof get_single_assignment>[2]) {
  return get_single_assignment(this.token, this.domain, args);
}

  createAssignment(args: Parameters<typeof create_assignment>[2]) {
  return create_assignment(this.token, this.domain, args);
}

  editAssignment(args: Parameters<typeof edit_assignment>[2]) {
  return edit_assignment(this.token, this.domain, args);
}

  bulkUpdateAssignmentDates(args: Parameters<typeof bulk_update_assignment_dates>[2]) {
  return bulk_update_assignment_dates(this.token, this.domain, args);
}

  listAssignmentOverrides(args: Parameters<typeof list_assignment_overrides>[2]) {
  return list_assignment_overrides(this.token, this.domain, args);
}

  getSingleAssignmentOverride(args: Parameters<typeof get_single_assignment_override>[2]) {
  return get_single_assignment_override(this.token, this.domain, args);
}

  redirectToAssignmentOverrideForGroup(args: Parameters<typeof redirect_to_assignment_override_for_group>[2]) {
  return redirect_to_assignment_override_for_group(this.token, this.domain, args);
}

  redirectToAssignmentOverrideForSection(args: Parameters<typeof redirect_to_assignment_override_for_section>[2]) {
  return redirect_to_assignment_override_for_section(this.token, this.domain, args);
}

  createAssignmentOverride(args: Parameters<typeof create_assignment_override>[2]) {
  return create_assignment_override(this.token, this.domain, args);
}

  updateAssignmentOverride(args: Parameters<typeof update_assignment_override>[2]) {
  return update_assignment_override(this.token, this.domain, args);
}

  deleteAssignmentOverride(args: Parameters<typeof delete_assignment_override>[2]) {
  return delete_assignment_override(this.token, this.domain, args);
}

  batchRetrieveOverridesInCourse(args: Parameters<typeof batch_retrieve_overrides_in_course>[2]) {
  return batch_retrieve_overrides_in_course(this.token, this.domain, args);
}

  batchCreateOverridesInCourse(args: Parameters<typeof batch_create_overrides_in_course>[2]) {
  return batch_create_overrides_in_course(this.token, this.domain, args);
}

  batchUpdateOverridesInCourse(args: Parameters<typeof batch_update_overrides_in_course>[2]) {
  return batch_update_overrides_in_course(this.token, this.domain, args);
}

  listAuthenticationProviders(args: Parameters<typeof list_authentication_providers>[2]) {
  return list_authentication_providers(this.token, this.domain, args);
}

  getAuthenticationProvider(args: Parameters<typeof get_authentication_provider>[2]) {
  return get_authentication_provider(this.token, this.domain, args);
}

  addAuthenticationProvider(args: Parameters<typeof add_authentication_provider>[2]) {
  return add_authentication_provider(this.token, this.domain, args);
}

  updateAuthenticationProvider(args: Parameters<typeof update_authentication_provider>[2]) {
  return update_authentication_provider(this.token, this.domain, args);
}

  deleteAuthenticationProvider(args: Parameters<typeof delete_authentication_provider>[2]) {
  return delete_authentication_provider(this.token, this.domain, args);
}

  restoreDeletedAuthenticationProvider(args: Parameters<typeof restore_deleted_authentication_provider>[2]) {
  return restore_deleted_authentication_provider(this.token, this.domain, args);
}

  showAccountAuthSettings(args: Parameters<typeof show_account_auth_settings>[2]) {
  return show_account_auth_settings(this.token, this.domain, args);
}

  updateAccountAuthSettings(args: Parameters<typeof update_account_auth_settings>[2]) {
  return update_account_auth_settings(this.token, this.domain, args);
}

  queryByLogin(args: Parameters<typeof query_by_login>[2]) {
  return query_by_login(this.token, this.domain, args);
}

  queryByAccount(args: Parameters<typeof query_by_account>[2]) {
  return query_by_account(this.token, this.domain, args);
}

  queryByUser(args: Parameters<typeof query_by_user>[2]) {
  return query_by_user(this.token, this.domain, args);
}

  listBlackoutDatesCourses(args: Parameters<typeof list_blackout_dates_courses>[2]) {
  return list_blackout_dates_courses(this.token, this.domain, args);
}

  listBlackoutDatesAccounts(args: Parameters<typeof list_blackout_dates_accounts>[2]) {
  return list_blackout_dates_accounts(this.token, this.domain, args);
}

  getSingleBlackoutDateCourses(args: Parameters<typeof get_single_blackout_date_courses>[2]) {
  return get_single_blackout_date_courses(this.token, this.domain, args);
}

  getSingleBlackoutDateAccounts(args: Parameters<typeof get_single_blackout_date_accounts>[2]) {
  return get_single_blackout_date_accounts(this.token, this.domain, args);
}

  newBlackoutDateCourses(args: Parameters<typeof new_blackout_date_courses>[2]) {
  return new_blackout_date_courses(this.token, this.domain, args);
}

  newBlackoutDateAccounts(args: Parameters<typeof new_blackout_date_accounts>[2]) {
  return new_blackout_date_accounts(this.token, this.domain, args);
}

  createBlackoutDateCourses(args: Parameters<typeof create_blackout_date_courses>[2]) {
  return create_blackout_date_courses(this.token, this.domain, args);
}

  createBlackoutDateAccounts(args: Parameters<typeof create_blackout_date_accounts>[2]) {
  return create_blackout_date_accounts(this.token, this.domain, args);
}

  updateBlackoutDateCourses(args: Parameters<typeof update_blackout_date_courses>[2]) {
  return update_blackout_date_courses(this.token, this.domain, args);
}

  updateBlackoutDateAccounts(args: Parameters<typeof update_blackout_date_accounts>[2]) {
  return update_blackout_date_accounts(this.token, this.domain, args);
}

  deleteBlackoutDateCourses(args: Parameters<typeof delete_blackout_date_courses>[2]) {
  return delete_blackout_date_courses(this.token, this.domain, args);
}

  deleteBlackoutDateAccounts(args: Parameters<typeof delete_blackout_date_accounts>[2]) {
  return delete_blackout_date_accounts(this.token, this.domain, args);
}

  updateListOfBlackoutDates(args: Parameters<typeof update_list_of_blackout_dates>[2]) {
  return update_list_of_blackout_dates(this.token, this.domain, args);
}

  listBlockTemplates(args: Parameters<typeof list_block_templates>[2]) {
  return list_block_templates(this.token, this.domain, args);
}

  getBlueprintInformation(args: Parameters<typeof get_blueprint_information>[2]) {
  return get_blueprint_information(this.token, this.domain, args);
}

  getAssociatedCourseInformation(args: Parameters<typeof get_associated_course_information>[2]) {
  return get_associated_course_information(this.token, this.domain, args);
}

  updateAssociatedCourses(args: Parameters<typeof update_associated_courses>[2]) {
  return update_associated_courses(this.token, this.domain, args);
}

  beginMigrationToPushToAssociatedCourses(args: Parameters<typeof begin_migration_to_push_to_associated_courses>[2]) {
  return begin_migration_to_push_to_associated_courses(this.token, this.domain, args);
}

  setOrRemoveRestrictionsOnBlueprintCourseObject(args: Parameters<typeof set_or_remove_restrictions_on_blueprint_course_object>[2]) {
  return set_or_remove_restrictions_on_blueprint_course_object(this.token, this.domain, args);
}

  getUnsyncedChanges(args: Parameters<typeof get_unsynced_changes>[2]) {
  return get_unsynced_changes(this.token, this.domain, args);
}

  listBlueprintMigrations(args: Parameters<typeof list_blueprint_migrations>[2]) {
  return list_blueprint_migrations(this.token, this.domain, args);
}

  showBlueprintMigration(args: Parameters<typeof show_blueprint_migration>[2]) {
  return show_blueprint_migration(this.token, this.domain, args);
}

  getMigrationDetails(args: Parameters<typeof get_migration_details>[2]) {
  return get_migration_details(this.token, this.domain, args);
}

  listBlueprintSubscriptions(args: Parameters<typeof list_blueprint_subscriptions>[2]) {
  return list_blueprint_subscriptions(this.token, this.domain, args);
}

  listBlueprintImports(args: Parameters<typeof list_blueprint_imports>[2]) {
  return list_blueprint_imports(this.token, this.domain, args);
}

  showBlueprintImport(args: Parameters<typeof show_blueprint_import>[2]) {
  return show_blueprint_import(this.token, this.domain, args);
}

  getImportDetails(args: Parameters<typeof get_import_details>[2]) {
  return get_import_details(this.token, this.domain, args);
}

  listBookmarks(args: Parameters<typeof list_bookmarks>[2]) {
  return list_bookmarks(this.token, this.domain, args);
}

  createBookmark(args: Parameters<typeof create_bookmark>[2]) {
  return create_bookmark(this.token, this.domain, args);
}

  getBookmark(args: Parameters<typeof get_bookmark>[2]) {
  return get_bookmark(this.token, this.domain, args);
}

  updateBookmark(args: Parameters<typeof update_bookmark>[2]) {
  return update_bookmark(this.token, this.domain, args);
}

  deleteBookmark(args: Parameters<typeof delete_bookmark>[2]) {
  return delete_bookmark(this.token, this.domain, args);
}

  getBrandConfigVariablesThatShouldBeUsedForThisDomain(args: Parameters<typeof get_brand_config_variables_that_should_be_used_for_this_domain>[2]) {
  return get_brand_config_variables_that_should_be_used_for_this_domain(this.token, this.domain, args);
}

  listCalendarEvents(args: Parameters<typeof list_calendar_events>[2]) {
  return list_calendar_events(this.token, this.domain, args);
}

  listCalendarEventsForUser(args: Parameters<typeof list_calendar_events_for_user>[2]) {
  return list_calendar_events_for_user(this.token, this.domain, args);
}

  createCalendarEvent(args: Parameters<typeof create_calendar_event>[2]) {
  return create_calendar_event(this.token, this.domain, args);
}

  getSingleCalendarEventOrAssignment(args: Parameters<typeof get_single_calendar_event_or_assignment>[2]) {
  return get_single_calendar_event_or_assignment(this.token, this.domain, args);
}

  reserveTimeSlot(args: Parameters<typeof reserve_time_slot>[2]) {
  return reserve_time_slot(this.token, this.domain, args);
}

  reserveTimeSlotParticipantId(args: Parameters<typeof reserve_time_slot_participant_id>[2]) {
  return reserve_time_slot_participant_id(this.token, this.domain, args);
}

  updateCalendarEvent(args: Parameters<typeof update_calendar_event>[2]) {
  return update_calendar_event(this.token, this.domain, args);
}

  deleteCalendarEvent(args: Parameters<typeof delete_calendar_event>[2]) {
  return delete_calendar_event(this.token, this.domain, args);
}

  saveEnabledAccountCalendars(args: Parameters<typeof save_enabled_account_calendars>[2]) {
  return save_enabled_account_calendars(this.token, this.domain, args);
}

  setCourseTimetable(args: Parameters<typeof set_course_timetable>[2]) {
  return set_course_timetable(this.token, this.domain, args);
}

  getCourseTimetable(args: Parameters<typeof get_course_timetable>[2]) {
  return get_course_timetable(this.token, this.domain, args);
}

  createOrUpdateEventsDirectlyForCourseTimetable(args: Parameters<typeof create_or_update_events_directly_for_course_timetable>[2]) {
  return create_or_update_events_directly_for_course_timetable(this.token, this.domain, args);
}

  listCollaborationsCourses(args: Parameters<typeof list_collaborations_courses>[2]) {
  return list_collaborations_courses(this.token, this.domain, args);
}

  listCollaborationsGroups(args: Parameters<typeof list_collaborations_groups>[2]) {
  return list_collaborations_groups(this.token, this.domain, args);
}

  listMembersOfCollaboration(args: Parameters<typeof list_members_of_collaboration>[2]) {
  return list_members_of_collaboration(this.token, this.domain, args);
}

  listPotentialMembersCourses(args: Parameters<typeof list_potential_members_courses>[2]) {
  return list_potential_members_courses(this.token, this.domain, args);
}

  listPotentialMembersGroups(args: Parameters<typeof list_potential_members_groups>[2]) {
  return list_potential_members_groups(this.token, this.domain, args);
}

  listOfCommmessagesForUser(args: Parameters<typeof list_of_commmessages_for_user>[2]) {
  return list_of_commmessages_for_user(this.token, this.domain, args);
}

  listUserCommunicationChannels(args: Parameters<typeof list_user_communication_channels>[2]) {
  return list_user_communication_channels(this.token, this.domain, args);
}

  createCommunicationChannel(args: Parameters<typeof create_communication_channel>[2]) {
  return create_communication_channel(this.token, this.domain, args);
}

  deleteCommunicationChannelId(args: Parameters<typeof delete_communication_channel_id>[2]) {
  return delete_communication_channel_id(this.token, this.domain, args);
}

  deleteCommunicationChannelType(args: Parameters<typeof delete_communication_channel_type>[2]) {
  return delete_communication_channel_type(this.token, this.domain, args);
}

  deletePushNotificationEndpoint(args: Parameters<typeof delete_push_notification_endpoint>[2]) {
  return delete_push_notification_endpoint(this.token, this.domain, args);
}

  listConferencesCourses(args: Parameters<typeof list_conferences_courses>[2]) {
  return list_conferences_courses(this.token, this.domain, args);
}

  listConferencesGroups(args: Parameters<typeof list_conferences_groups>[2]) {
  return list_conferences_groups(this.token, this.domain, args);
}

  listConferencesForCurrentUser(args: Parameters<typeof list_conferences_for_current_user>[2]) {
  return list_conferences_for_current_user(this.token, this.domain, args);
}

  listContentExportsCourses(args: Parameters<typeof list_content_exports_courses>[2]) {
  return list_content_exports_courses(this.token, this.domain, args);
}

  listContentExportsGroups(args: Parameters<typeof list_content_exports_groups>[2]) {
  return list_content_exports_groups(this.token, this.domain, args);
}

  listContentExportsUsers(args: Parameters<typeof list_content_exports_users>[2]) {
  return list_content_exports_users(this.token, this.domain, args);
}

  showContentExportCourses(args: Parameters<typeof show_content_export_courses>[2]) {
  return show_content_export_courses(this.token, this.domain, args);
}

  showContentExportGroups(args: Parameters<typeof show_content_export_groups>[2]) {
  return show_content_export_groups(this.token, this.domain, args);
}

  showContentExportUsers(args: Parameters<typeof show_content_export_users>[2]) {
  return show_content_export_users(this.token, this.domain, args);
}

  exportContentCourses(args: Parameters<typeof export_content_courses>[2]) {
  return export_content_courses(this.token, this.domain, args);
}

  exportContentGroups(args: Parameters<typeof export_content_groups>[2]) {
  return export_content_groups(this.token, this.domain, args);
}

  exportContentUsers(args: Parameters<typeof export_content_users>[2]) {
  return export_content_users(this.token, this.domain, args);
}

  listMigrationIssuesAccounts(args: Parameters<typeof list_migration_issues_accounts>[2]) {
  return list_migration_issues_accounts(this.token, this.domain, args);
}

  listMigrationIssuesCourses(args: Parameters<typeof list_migration_issues_courses>[2]) {
  return list_migration_issues_courses(this.token, this.domain, args);
}

  listMigrationIssuesGroups(args: Parameters<typeof list_migration_issues_groups>[2]) {
  return list_migration_issues_groups(this.token, this.domain, args);
}

  listMigrationIssuesUsers(args: Parameters<typeof list_migration_issues_users>[2]) {
  return list_migration_issues_users(this.token, this.domain, args);
}

  getMigrationIssueAccounts(args: Parameters<typeof get_migration_issue_accounts>[2]) {
  return get_migration_issue_accounts(this.token, this.domain, args);
}

  getMigrationIssueCourses(args: Parameters<typeof get_migration_issue_courses>[2]) {
  return get_migration_issue_courses(this.token, this.domain, args);
}

  getMigrationIssueGroups(args: Parameters<typeof get_migration_issue_groups>[2]) {
  return get_migration_issue_groups(this.token, this.domain, args);
}

  getMigrationIssueUsers(args: Parameters<typeof get_migration_issue_users>[2]) {
  return get_migration_issue_users(this.token, this.domain, args);
}

  updateMigrationIssueAccounts(args: Parameters<typeof update_migration_issue_accounts>[2]) {
  return update_migration_issue_accounts(this.token, this.domain, args);
}

  updateMigrationIssueCourses(args: Parameters<typeof update_migration_issue_courses>[2]) {
  return update_migration_issue_courses(this.token, this.domain, args);
}

  updateMigrationIssueGroups(args: Parameters<typeof update_migration_issue_groups>[2]) {
  return update_migration_issue_groups(this.token, this.domain, args);
}

  updateMigrationIssueUsers(args: Parameters<typeof update_migration_issue_users>[2]) {
  return update_migration_issue_users(this.token, this.domain, args);
}

  listContentMigrationsAccounts(args: Parameters<typeof list_content_migrations_accounts>[2]) {
  return list_content_migrations_accounts(this.token, this.domain, args);
}

  listContentMigrationsCourses(args: Parameters<typeof list_content_migrations_courses>[2]) {
  return list_content_migrations_courses(this.token, this.domain, args);
}

  listContentMigrationsGroups(args: Parameters<typeof list_content_migrations_groups>[2]) {
  return list_content_migrations_groups(this.token, this.domain, args);
}

  listContentMigrationsUsers(args: Parameters<typeof list_content_migrations_users>[2]) {
  return list_content_migrations_users(this.token, this.domain, args);
}

  getContentMigrationAccounts(args: Parameters<typeof get_content_migration_accounts>[2]) {
  return get_content_migration_accounts(this.token, this.domain, args);
}

  getContentMigrationCourses(args: Parameters<typeof get_content_migration_courses>[2]) {
  return get_content_migration_courses(this.token, this.domain, args);
}

  getContentMigrationGroups(args: Parameters<typeof get_content_migration_groups>[2]) {
  return get_content_migration_groups(this.token, this.domain, args);
}

  getContentMigrationUsers(args: Parameters<typeof get_content_migration_users>[2]) {
  return get_content_migration_users(this.token, this.domain, args);
}

  createContentMigrationAccounts(args: Parameters<typeof create_content_migration_accounts>[2]) {
  return create_content_migration_accounts(this.token, this.domain, args);
}

  createContentMigrationCourses(args: Parameters<typeof create_content_migration_courses>[2]) {
  return create_content_migration_courses(this.token, this.domain, args);
}

  createContentMigrationGroups(args: Parameters<typeof create_content_migration_groups>[2]) {
  return create_content_migration_groups(this.token, this.domain, args);
}

  createContentMigrationUsers(args: Parameters<typeof create_content_migration_users>[2]) {
  return create_content_migration_users(this.token, this.domain, args);
}

  updateContentMigrationAccounts(args: Parameters<typeof update_content_migration_accounts>[2]) {
  return update_content_migration_accounts(this.token, this.domain, args);
}

  updateContentMigrationCourses(args: Parameters<typeof update_content_migration_courses>[2]) {
  return update_content_migration_courses(this.token, this.domain, args);
}

  updateContentMigrationGroups(args: Parameters<typeof update_content_migration_groups>[2]) {
  return update_content_migration_groups(this.token, this.domain, args);
}

  updateContentMigrationUsers(args: Parameters<typeof update_content_migration_users>[2]) {
  return update_content_migration_users(this.token, this.domain, args);
}

  listMigrationSystemsAccounts(args: Parameters<typeof list_migration_systems_accounts>[2]) {
  return list_migration_systems_accounts(this.token, this.domain, args);
}

  listMigrationSystemsCourses(args: Parameters<typeof list_migration_systems_courses>[2]) {
  return list_migration_systems_courses(this.token, this.domain, args);
}

  listMigrationSystemsGroups(args: Parameters<typeof list_migration_systems_groups>[2]) {
  return list_migration_systems_groups(this.token, this.domain, args);
}

  listMigrationSystemsUsers(args: Parameters<typeof list_migration_systems_users>[2]) {
  return list_migration_systems_users(this.token, this.domain, args);
}

  listItemsForSelectiveImportAccounts(args: Parameters<typeof list_items_for_selective_import_accounts>[2]) {
  return list_items_for_selective_import_accounts(this.token, this.domain, args);
}

  listItemsForSelectiveImportCourses(args: Parameters<typeof list_items_for_selective_import_courses>[2]) {
  return list_items_for_selective_import_courses(this.token, this.domain, args);
}

  listItemsForSelectiveImportGroups(args: Parameters<typeof list_items_for_selective_import_groups>[2]) {
  return list_items_for_selective_import_groups(this.token, this.domain, args);
}

  listItemsForSelectiveImportUsers(args: Parameters<typeof list_items_for_selective_import_users>[2]) {
  return list_items_for_selective_import_users(this.token, this.domain, args);
}

  getAssetIdMapping(args: Parameters<typeof get_asset_id_mapping>[2]) {
  return get_asset_id_mapping(this.token, this.domain, args);
}

  getCurrentSettingsForAccountOrCourseCourses(args: Parameters<typeof get_current_settings_for_account_or_course_courses>[2]) {
  return get_current_settings_for_account_or_course_courses(this.token, this.domain, args);
}

  getCurrentSettingsForAccountOrCourseAccounts(args: Parameters<typeof get_current_settings_for_account_or_course_accounts>[2]) {
  return get_current_settings_for_account_or_course_accounts(this.token, this.domain, args);
}

  enableDisableOrClearExplicitCspSettingCourses(args: Parameters<typeof enable_disable_or_clear_explicit_csp_setting_courses>[2]) {
  return enable_disable_or_clear_explicit_csp_setting_courses(this.token, this.domain, args);
}

  enableDisableOrClearExplicitCspSettingAccounts(args: Parameters<typeof enable_disable_or_clear_explicit_csp_setting_accounts>[2]) {
  return enable_disable_or_clear_explicit_csp_setting_accounts(this.token, this.domain, args);
}

  lockOrUnlockCurrentCspSettingsForSubAccountsAndCourses(args: Parameters<typeof lock_or_unlock_current_csp_settings_for_sub_accounts_and_courses>[2]) {
  return lock_or_unlock_current_csp_settings_for_sub_accounts_and_courses(this.token, this.domain, args);
}

  addAllowedDomainToAccount(args: Parameters<typeof add_allowed_domain_to_account>[2]) {
  return add_allowed_domain_to_account(this.token, this.domain, args);
}

  addMultipleAllowedDomainsToAccount(args: Parameters<typeof add_multiple_allowed_domains_to_account>[2]) {
  return add_multiple_allowed_domains_to_account(this.token, this.domain, args);
}

  removeDomainFromAccount(args: Parameters<typeof remove_domain_from_account>[2]) {
  return remove_domain_from_account(this.token, this.domain, args);
}

  createContentShare(args: Parameters<typeof create_content_share>[2]) {
  return create_content_share(this.token, this.domain, args);
}

  listContentSharesSent(args: Parameters<typeof list_content_shares_sent>[2]) {
  return list_content_shares_sent(this.token, this.domain, args);
}

  listContentSharesReceived(args: Parameters<typeof list_content_shares_received>[2]) {
  return list_content_shares_received(this.token, this.domain, args);
}

  getUnreadSharesCount(args: Parameters<typeof get_unread_shares_count>[2]) {
  return get_unread_shares_count(this.token, this.domain, args);
}

  getContentShare(args: Parameters<typeof get_content_share>[2]) {
  return get_content_share(this.token, this.domain, args);
}

  removeContentShare(args: Parameters<typeof remove_content_share>[2]) {
  return remove_content_share(this.token, this.domain, args);
}

  addUsersToContentShare(args: Parameters<typeof add_users_to_content_share>[2]) {
  return add_users_to_content_share(this.token, this.domain, args);
}

  updateContentShare(args: Parameters<typeof update_content_share>[2]) {
  return update_content_share(this.token, this.domain, args);
}

  listConversations(args: Parameters<typeof list_conversations>[2]) {
  return list_conversations(this.token, this.domain, args);
}

  createConversation(args: Parameters<typeof create_conversation>[2]) {
  return create_conversation(this.token, this.domain, args);
}

  getRunningBatches(args: Parameters<typeof get_running_batches>[2]) {
  return get_running_batches(this.token, this.domain, args);
}

  getSingleConversation(args: Parameters<typeof get_single_conversation>[2]) {
  return get_single_conversation(this.token, this.domain, args);
}

  editConversation(args: Parameters<typeof edit_conversation>[2]) {
  return edit_conversation(this.token, this.domain, args);
}

  markAllAsRead(args: Parameters<typeof mark_all_as_read>[2]) {
  return mark_all_as_read(this.token, this.domain, args);
}

  deleteConversation(args: Parameters<typeof delete_conversation>[2]) {
  return delete_conversation(this.token, this.domain, args);
}

  addRecipients(args: Parameters<typeof add_recipients>[2]) {
  return add_recipients(this.token, this.domain, args);
}

  addMessage(args: Parameters<typeof add_message>[2]) {
  return add_message(this.token, this.domain, args);
}

  deleteMessage(args: Parameters<typeof delete_message>[2]) {
  return delete_message(this.token, this.domain, args);
}

  batchUpdateConversations(args: Parameters<typeof batch_update_conversations>[2]) {
  return batch_update_conversations(this.token, this.domain, args);
}

  findRecipients(args: Parameters<typeof find_recipients>[2]) {
  return find_recipients(this.token, this.domain, args);
}

  unreadCount(args: Parameters<typeof unread_count>[2]) {
  return unread_count(this.token, this.domain, args);
}

  queryByCourse(args: Parameters<typeof query_by_course>[2]) {
  return query_by_course(this.token, this.domain, args);
}

  showCoursePace(args: Parameters<typeof show_course_pace>[2]) {
  return show_course_pace(this.token, this.domain, args);
}

  createCoursePace(args: Parameters<typeof create_course_pace>[2]) {
  return create_course_pace(this.token, this.domain, args);
}

  updateCoursePace(args: Parameters<typeof update_course_pace>[2]) {
  return update_course_pace(this.token, this.domain, args);
}

  deleteCoursePace(args: Parameters<typeof delete_course_pace>[2]) {
  return delete_course_pace(this.token, this.domain, args);
}

  setExtensionsForStudentQuizSubmissions(args: Parameters<typeof set_extensions_for_student_quiz_submissions>[2]) {
  return set_extensions_for_student_quiz_submissions(this.token, this.domain, args);
}

  statusOfLastReport(args: Parameters<typeof status_of_last_report>[2]) {
  return status_of_last_report(this.token, this.domain, args);
}

  listYourCourses(args: Parameters<typeof list_your_courses>[2]) {
  return list_your_courses(this.token, this.domain, args);
}

  listCoursesForUser(args: Parameters<typeof list_courses_for_user>[2]) {
  return list_courses_for_user(this.token, this.domain, args);
}

  getUserProgress(args: Parameters<typeof get_user_progress>[2]) {
  return get_user_progress(this.token, this.domain, args);
}

  createNewCourse(args: Parameters<typeof create_new_course>[2]) {
  return create_new_course(this.token, this.domain, args);
}

  uploadFile(args: Parameters<typeof upload_file>[2]) {
  return upload_file(this.token, this.domain, args);
}

  listStudents(args: Parameters<typeof list_students>[2]) {
  return list_students(this.token, this.domain, args);
}

  listUsersInCourseUsers(args: Parameters<typeof list_users_in_course_users>[2]) {
  return list_users_in_course_users(this.token, this.domain, args);
}

  listUsersInCourseSearchUsers(args: Parameters<typeof list_users_in_course_search_users>[2]) {
  return list_users_in_course_search_users(this.token, this.domain, args);
}

  listRecentlyLoggedInStudents(args: Parameters<typeof list_recently_logged_in_students>[2]) {
  return list_recently_logged_in_students(this.token, this.domain, args);
}

  getSingleUser(args: Parameters<typeof get_single_user>[2]) {
  return get_single_user(this.token, this.domain, args);
}

  searchForContentShareUsers(args: Parameters<typeof search_for_content_share_users>[2]) {
  return search_for_content_share_users(this.token, this.domain, args);
}

  previewProcessedHtml(args: Parameters<typeof preview_processed_html>[2]) {
  return preview_processed_html(this.token, this.domain, args);
}

  courseActivityStream(args: Parameters<typeof course_activity_stream>[2]) {
  return course_activity_stream(this.token, this.domain, args);
}

  courseActivityStreamSummary(args: Parameters<typeof course_activity_stream_summary>[2]) {
  return course_activity_stream_summary(this.token, this.domain, args);
}

  courseTodoItems(args: Parameters<typeof course_todo_items>[2]) {
  return course_todo_items(this.token, this.domain, args);
}

  deleteConcludeCourse(args: Parameters<typeof delete_conclude_course>[2]) {
  return delete_conclude_course(this.token, this.domain, args);
}

  getCourseSettings(args: Parameters<typeof get_course_settings>[2]) {
  return get_course_settings(this.token, this.domain, args);
}

  updateCourseSettings(args: Parameters<typeof update_course_settings>[2]) {
  return update_course_settings(this.token, this.domain, args);
}

  returnTestStudentForCourse(args: Parameters<typeof return_test_student_for_course>[2]) {
  return return_test_student_for_course(this.token, this.domain, args);
}

  getSingleCourseCourses(args: Parameters<typeof get_single_course_courses>[2]) {
  return get_single_course_courses(this.token, this.domain, args);
}

  getSingleCourseAccounts(args: Parameters<typeof get_single_course_accounts>[2]) {
  return get_single_course_accounts(this.token, this.domain, args);
}

  updateCourse(args: Parameters<typeof update_course>[2]) {
  return update_course(this.token, this.domain, args);
}

  updateCourses(args: Parameters<typeof update_courses>[2]) {
  return update_courses(this.token, this.domain, args);
}

  resetCourse(args: Parameters<typeof reset_course>[2]) {
  return reset_course(this.token, this.domain, args);
}

  getEffectiveDueDates(args: Parameters<typeof get_effective_due_dates>[2]) {
  return get_effective_due_dates(this.token, this.domain, args);
}

  getBulkUserProgress(args: Parameters<typeof get_bulk_user_progress>[2]) {
  return get_bulk_user_progress(this.token, this.domain, args);
}

  removeQuizMigrationAlert(args: Parameters<typeof remove_quiz_migration_alert>[2]) {
  return remove_quiz_migration_alert(this.token, this.domain, args);
}

  getCourseCopyStatus(args: Parameters<typeof get_course_copy_status>[2]) {
  return get_course_copy_status(this.token, this.domain, args);
}

  copyCourseContent(args: Parameters<typeof copy_course_content>[2]) {
  return copy_course_content(this.token, this.domain, args);
}

  listCustomGradebookColumns(args: Parameters<typeof list_custom_gradebook_columns>[2]) {
  return list_custom_gradebook_columns(this.token, this.domain, args);
}

  createCustomGradebookColumn(args: Parameters<typeof create_custom_gradebook_column>[2]) {
  return create_custom_gradebook_column(this.token, this.domain, args);
}

  updateCustomGradebookColumn(args: Parameters<typeof update_custom_gradebook_column>[2]) {
  return update_custom_gradebook_column(this.token, this.domain, args);
}

  deleteCustomGradebookColumn(args: Parameters<typeof delete_custom_gradebook_column>[2]) {
  return delete_custom_gradebook_column(this.token, this.domain, args);
}

  reorderCustomColumns(args: Parameters<typeof reorder_custom_columns>[2]) {
  return reorder_custom_columns(this.token, this.domain, args);
}

  listEntriesForColumn(args: Parameters<typeof list_entries_for_column>[2]) {
  return list_entries_for_column(this.token, this.domain, args);
}

  updateColumnData(args: Parameters<typeof update_column_data>[2]) {
  return update_column_data(this.token, this.domain, args);
}

  bulkUpdateColumnData(args: Parameters<typeof bulk_update_column_data>[2]) {
  return bulk_update_column_data(this.token, this.domain, args);
}

  createDeveloperKeyAccountBinding(args: Parameters<typeof create_developer_key_account_binding>[2]) {
  return create_developer_key_account_binding(this.token, this.domain, args);
}

  listDeveloperKeys(args: Parameters<typeof list_developer_keys>[2]) {
  return list_developer_keys(this.token, this.domain, args);
}

  createDeveloperKey(args: Parameters<typeof create_developer_key>[2]) {
  return create_developer_key(this.token, this.domain, args);
}

  updateDeveloperKey(args: Parameters<typeof update_developer_key>[2]) {
  return update_developer_key(this.token, this.domain, args);
}

  deleteDeveloperKey(args: Parameters<typeof delete_developer_key>[2]) {
  return delete_developer_key(this.token, this.domain, args);
}

  listDiscussionTopicsCourses(args: Parameters<typeof list_discussion_topics_courses>[2]) {
  return list_discussion_topics_courses(this.token, this.domain, args);
}

  listDiscussionTopicsGroups(args: Parameters<typeof list_discussion_topics_groups>[2]) {
  return list_discussion_topics_groups(this.token, this.domain, args);
}

  createNewDiscussionTopicCourses(args: Parameters<typeof create_new_discussion_topic_courses>[2]) {
  return create_new_discussion_topic_courses(this.token, this.domain, args);
}

  createNewDiscussionTopicGroups(args: Parameters<typeof create_new_discussion_topic_groups>[2]) {
  return create_new_discussion_topic_groups(this.token, this.domain, args);
}

  updateTopicCourses(args: Parameters<typeof update_topic_courses>[2]) {
  return update_topic_courses(this.token, this.domain, args);
}

  updateTopicGroups(args: Parameters<typeof update_topic_groups>[2]) {
  return update_topic_groups(this.token, this.domain, args);
}

  deleteTopicCourses(args: Parameters<typeof delete_topic_courses>[2]) {
  return delete_topic_courses(this.token, this.domain, args);
}

  deleteTopicGroups(args: Parameters<typeof delete_topic_groups>[2]) {
  return delete_topic_groups(this.token, this.domain, args);
}

  reorderPinnedTopicsCourses(args: Parameters<typeof reorder_pinned_topics_courses>[2]) {
  return reorder_pinned_topics_courses(this.token, this.domain, args);
}

  reorderPinnedTopicsGroups(args: Parameters<typeof reorder_pinned_topics_groups>[2]) {
  return reorder_pinned_topics_groups(this.token, this.domain, args);
}

  updateEntryCourses(args: Parameters<typeof update_entry_courses>[2]) {
  return update_entry_courses(this.token, this.domain, args);
}

  updateEntryGroups(args: Parameters<typeof update_entry_groups>[2]) {
  return update_entry_groups(this.token, this.domain, args);
}

  deleteEntryCourses(args: Parameters<typeof delete_entry_courses>[2]) {
  return delete_entry_courses(this.token, this.domain, args);
}

  deleteEntryGroups(args: Parameters<typeof delete_entry_groups>[2]) {
  return delete_entry_groups(this.token, this.domain, args);
}

  getSingleTopicCourses(args: Parameters<typeof get_single_topic_courses>[2]) {
  return get_single_topic_courses(this.token, this.domain, args);
}

  getSingleTopicGroups(args: Parameters<typeof get_single_topic_groups>[2]) {
  return get_single_topic_groups(this.token, this.domain, args);
}

  findLastSummaryCourses(args: Parameters<typeof find_last_summary_courses>[2]) {
  return find_last_summary_courses(this.token, this.domain, args);
}

  findLastSummaryGroups(args: Parameters<typeof find_last_summary_groups>[2]) {
  return find_last_summary_groups(this.token, this.domain, args);
}

  findOrCreateSummaryCourses(args: Parameters<typeof find_or_create_summary_courses>[2]) {
  return find_or_create_summary_courses(this.token, this.domain, args);
}

  findOrCreateSummaryGroups(args: Parameters<typeof find_or_create_summary_groups>[2]) {
  return find_or_create_summary_groups(this.token, this.domain, args);
}

  disableSummaryCourses(args: Parameters<typeof disable_summary_courses>[2]) {
  return disable_summary_courses(this.token, this.domain, args);
}

  disableSummaryGroups(args: Parameters<typeof disable_summary_groups>[2]) {
  return disable_summary_groups(this.token, this.domain, args);
}

  summaryFeedbackCourses(args: Parameters<typeof summary_feedback_courses>[2]) {
  return summary_feedback_courses(this.token, this.domain, args);
}

  summaryFeedbackGroups(args: Parameters<typeof summary_feedback_groups>[2]) {
  return summary_feedback_groups(this.token, this.domain, args);
}

  getFullTopicCourses(args: Parameters<typeof get_full_topic_courses>[2]) {
  return get_full_topic_courses(this.token, this.domain, args);
}

  getFullTopicGroups(args: Parameters<typeof get_full_topic_groups>[2]) {
  return get_full_topic_groups(this.token, this.domain, args);
}

  postEntryCourses(args: Parameters<typeof post_entry_courses>[2]) {
  return post_entry_courses(this.token, this.domain, args);
}

  postEntryGroups(args: Parameters<typeof post_entry_groups>[2]) {
  return post_entry_groups(this.token, this.domain, args);
}

  duplicateDiscussionTopicCourses(args: Parameters<typeof duplicate_discussion_topic_courses>[2]) {
  return duplicate_discussion_topic_courses(this.token, this.domain, args);
}

  duplicateDiscussionTopicGroups(args: Parameters<typeof duplicate_discussion_topic_groups>[2]) {
  return duplicate_discussion_topic_groups(this.token, this.domain, args);
}

  listTopicEntriesCourses(args: Parameters<typeof list_topic_entries_courses>[2]) {
  return list_topic_entries_courses(this.token, this.domain, args);
}

  listTopicEntriesGroups(args: Parameters<typeof list_topic_entries_groups>[2]) {
  return list_topic_entries_groups(this.token, this.domain, args);
}

  postReplyCourses(args: Parameters<typeof post_reply_courses>[2]) {
  return post_reply_courses(this.token, this.domain, args);
}

  postReplyGroups(args: Parameters<typeof post_reply_groups>[2]) {
  return post_reply_groups(this.token, this.domain, args);
}

  listEntryRepliesCourses(args: Parameters<typeof list_entry_replies_courses>[2]) {
  return list_entry_replies_courses(this.token, this.domain, args);
}

  listEntryRepliesGroups(args: Parameters<typeof list_entry_replies_groups>[2]) {
  return list_entry_replies_groups(this.token, this.domain, args);
}

  listEntriesCourses(args: Parameters<typeof list_entries_courses>[2]) {
  return list_entries_courses(this.token, this.domain, args);
}

  listEntriesGroups(args: Parameters<typeof list_entries_groups>[2]) {
  return list_entries_groups(this.token, this.domain, args);
}

  markTopicAsReadCourses(args: Parameters<typeof mark_topic_as_read_courses>[2]) {
  return mark_topic_as_read_courses(this.token, this.domain, args);
}

  markTopicAsReadGroups(args: Parameters<typeof mark_topic_as_read_groups>[2]) {
  return mark_topic_as_read_groups(this.token, this.domain, args);
}

  markAllTopicAsReadCourses(args: Parameters<typeof mark_all_topic_as_read_courses>[2]) {
  return mark_all_topic_as_read_courses(this.token, this.domain, args);
}

  markAllTopicAsReadGroups(args: Parameters<typeof mark_all_topic_as_read_groups>[2]) {
  return mark_all_topic_as_read_groups(this.token, this.domain, args);
}

  markTopicAsUnreadCourses(args: Parameters<typeof mark_topic_as_unread_courses>[2]) {
  return mark_topic_as_unread_courses(this.token, this.domain, args);
}

  markTopicAsUnreadGroups(args: Parameters<typeof mark_topic_as_unread_groups>[2]) {
  return mark_topic_as_unread_groups(this.token, this.domain, args);
}

  markAllEntriesAsReadCourses(args: Parameters<typeof mark_all_entries_as_read_courses>[2]) {
  return mark_all_entries_as_read_courses(this.token, this.domain, args);
}

  markAllEntriesAsReadGroups(args: Parameters<typeof mark_all_entries_as_read_groups>[2]) {
  return mark_all_entries_as_read_groups(this.token, this.domain, args);
}

  markAllEntriesAsUnreadCourses(args: Parameters<typeof mark_all_entries_as_unread_courses>[2]) {
  return mark_all_entries_as_unread_courses(this.token, this.domain, args);
}

  markAllEntriesAsUnreadGroups(args: Parameters<typeof mark_all_entries_as_unread_groups>[2]) {
  return mark_all_entries_as_unread_groups(this.token, this.domain, args);
}

  markEntryAsReadCourses(args: Parameters<typeof mark_entry_as_read_courses>[2]) {
  return mark_entry_as_read_courses(this.token, this.domain, args);
}

  markEntryAsReadGroups(args: Parameters<typeof mark_entry_as_read_groups>[2]) {
  return mark_entry_as_read_groups(this.token, this.domain, args);
}

  markEntryAsUnreadCourses(args: Parameters<typeof mark_entry_as_unread_courses>[2]) {
  return mark_entry_as_unread_courses(this.token, this.domain, args);
}

  markEntryAsUnreadGroups(args: Parameters<typeof mark_entry_as_unread_groups>[2]) {
  return mark_entry_as_unread_groups(this.token, this.domain, args);
}

  rateEntryCourses(args: Parameters<typeof rate_entry_courses>[2]) {
  return rate_entry_courses(this.token, this.domain, args);
}

  rateEntryGroups(args: Parameters<typeof rate_entry_groups>[2]) {
  return rate_entry_groups(this.token, this.domain, args);
}

  subscribeToTopicCourses(args: Parameters<typeof subscribe_to_topic_courses>[2]) {
  return subscribe_to_topic_courses(this.token, this.domain, args);
}

  subscribeToTopicGroups(args: Parameters<typeof subscribe_to_topic_groups>[2]) {
  return subscribe_to_topic_groups(this.token, this.domain, args);
}

  unsubscribeFromTopicCourses(args: Parameters<typeof unsubscribe_from_topic_courses>[2]) {
  return unsubscribe_from_topic_courses(this.token, this.domain, args);
}

  unsubscribeFromTopicGroups(args: Parameters<typeof unsubscribe_from_topic_groups>[2]) {
  return unsubscribe_from_topic_groups(this.token, this.domain, args);
}

  getAllEportfoliosForUser(args: Parameters<typeof get_all_eportfolios_for_user>[2]) {
  return get_all_eportfolios_for_user(this.token, this.domain, args);
}

  getEportfolio(args: Parameters<typeof get_eportfolio>[2]) {
  return get_eportfolio(this.token, this.domain, args);
}

  deleteEportfolio(args: Parameters<typeof delete_eportfolio>[2]) {
  return delete_eportfolio(this.token, this.domain, args);
}

  getEportfolioPages(args: Parameters<typeof get_eportfolio_pages>[2]) {
  return get_eportfolio_pages(this.token, this.domain, args);
}

  moderateEportfolio(args: Parameters<typeof moderate_eportfolio>[2]) {
  return moderate_eportfolio(this.token, this.domain, args);
}

  moderateAllEportfoliosForUser(args: Parameters<typeof moderate_all_eportfolios_for_user>[2]) {
  return moderate_all_eportfolios_for_user(this.token, this.domain, args);
}

  restoreDeletedEportfolio(args: Parameters<typeof restore_deleted_eportfolio>[2]) {
  return restore_deleted_eportfolio(this.token, this.domain, args);
}

  listCoursesWithTheirLatestEpubExport(args: Parameters<typeof list_courses_with_their_latest_epub_export>[2]) {
  return list_courses_with_their_latest_epub_export(this.token, this.domain, args);
}

  createEpubExport(args: Parameters<typeof create_epub_export>[2]) {
  return create_epub_export(this.token, this.domain, args);
}

  showEpubExport(args: Parameters<typeof show_epub_export>[2]) {
  return show_epub_export(this.token, this.domain, args);
}

  createEnrollmentTerm(args: Parameters<typeof create_enrollment_term>[2]) {
  return create_enrollment_term(this.token, this.domain, args);
}

  updateEnrollmentTerm(args: Parameters<typeof update_enrollment_term>[2]) {
  return update_enrollment_term(this.token, this.domain, args);
}

  deleteEnrollmentTerm(args: Parameters<typeof delete_enrollment_term>[2]) {
  return delete_enrollment_term(this.token, this.domain, args);
}

  listEnrollmentTerms(args: Parameters<typeof list_enrollment_terms>[2]) {
  return list_enrollment_terms(this.token, this.domain, args);
}

  retrieveEnrollmentTerm(args: Parameters<typeof retrieve_enrollment_term>[2]) {
  return retrieve_enrollment_term(this.token, this.domain, args);
}

  listEnrollmentsCourses(args: Parameters<typeof list_enrollments_courses>[2]) {
  return list_enrollments_courses(this.token, this.domain, args);
}

  listEnrollmentsSections(args: Parameters<typeof list_enrollments_sections>[2]) {
  return list_enrollments_sections(this.token, this.domain, args);
}

  listEnrollmentsUsers(args: Parameters<typeof list_enrollments_users>[2]) {
  return list_enrollments_users(this.token, this.domain, args);
}

  enrollmentById(args: Parameters<typeof enrollment_by_id>[2]) {
  return enrollment_by_id(this.token, this.domain, args);
}

  enrollUserCourses(args: Parameters<typeof enroll_user_courses>[2]) {
  return enroll_user_courses(this.token, this.domain, args);
}

  enrollUserSections(args: Parameters<typeof enroll_user_sections>[2]) {
  return enroll_user_sections(this.token, this.domain, args);
}

  concludeDeactivateOrDeleteEnrollment(args: Parameters<typeof conclude_deactivate_or_delete_enrollment>[2]) {
  return conclude_deactivate_or_delete_enrollment(this.token, this.domain, args);
}

  acceptCourseInvitation(args: Parameters<typeof accept_course_invitation>[2]) {
  return accept_course_invitation(this.token, this.domain, args);
}

  rejectCourseInvitation(args: Parameters<typeof reject_course_invitation>[2]) {
  return reject_course_invitation(this.token, this.domain, args);
}

  reActivateEnrollment(args: Parameters<typeof re_activate_enrollment>[2]) {
  return re_activate_enrollment(this.token, this.domain, args);
}

  addLastAttendedDate(args: Parameters<typeof add_last_attended_date>[2]) {
  return add_last_attended_date(this.token, this.domain, args);
}

  showTemporaryEnrollmentRecipientAndProviderStatus(args: Parameters<typeof show_temporary_enrollment_recipient_and_provider_status>[2]) {
  return show_temporary_enrollment_recipient_and_provider_status(this.token, this.domain, args);
}

  createErrorReport(args: Parameters<typeof create_error_report>[2]) {
  return create_error_report(this.token, this.domain, args);
}

  listExternalToolsCourses(args: Parameters<typeof list_external_tools_courses>[2]) {
  return list_external_tools_courses(this.token, this.domain, args);
}

  listExternalToolsAccounts(args: Parameters<typeof list_external_tools_accounts>[2]) {
  return list_external_tools_accounts(this.token, this.domain, args);
}

  listExternalToolsGroups(args: Parameters<typeof list_external_tools_groups>[2]) {
  return list_external_tools_groups(this.token, this.domain, args);
}

  getSessionlessLaunchUrlForExternalToolCourses(args: Parameters<typeof get_sessionless_launch_url_for_external_tool_courses>[2]) {
  return get_sessionless_launch_url_for_external_tool_courses(this.token, this.domain, args);
}

  getSessionlessLaunchUrlForExternalToolAccounts(args: Parameters<typeof get_sessionless_launch_url_for_external_tool_accounts>[2]) {
  return get_sessionless_launch_url_for_external_tool_accounts(this.token, this.domain, args);
}

  getSingleExternalToolCourses(args: Parameters<typeof get_single_external_tool_courses>[2]) {
  return get_single_external_tool_courses(this.token, this.domain, args);
}

  getSingleExternalToolAccounts(args: Parameters<typeof get_single_external_tool_accounts>[2]) {
  return get_single_external_tool_accounts(this.token, this.domain, args);
}

  createExternalToolCourses(args: Parameters<typeof create_external_tool_courses>[2]) {
  return create_external_tool_courses(this.token, this.domain, args);
}

  createExternalToolAccounts(args: Parameters<typeof create_external_tool_accounts>[2]) {
  return create_external_tool_accounts(this.token, this.domain, args);
}

  editExternalToolCourses(args: Parameters<typeof edit_external_tool_courses>[2]) {
  return edit_external_tool_courses(this.token, this.domain, args);
}

  editExternalToolAccounts(args: Parameters<typeof edit_external_tool_accounts>[2]) {
  return edit_external_tool_accounts(this.token, this.domain, args);
}

  deleteExternalToolCourses(args: Parameters<typeof delete_external_tool_courses>[2]) {
  return delete_external_tool_courses(this.token, this.domain, args);
}

  deleteExternalToolAccounts(args: Parameters<typeof delete_external_tool_accounts>[2]) {
  return delete_external_tool_accounts(this.token, this.domain, args);
}

  addToolToRceFavorites(args: Parameters<typeof add_tool_to_rce_favorites>[2]) {
  return add_tool_to_rce_favorites(this.token, this.domain, args);
}

  removeToolFromRceFavorites(args: Parameters<typeof remove_tool_from_rce_favorites>[2]) {
  return remove_tool_from_rce_favorites(this.token, this.domain, args);
}

  addToolToTopNavigationFavorites(args: Parameters<typeof add_tool_to_top_navigation_favorites>[2]) {
  return add_tool_to_top_navigation_favorites(this.token, this.domain, args);
}

  removeToolFromTopNavigationFavorites(args: Parameters<typeof remove_tool_from_top_navigation_favorites>[2]) {
  return remove_tool_from_top_navigation_favorites(this.token, this.domain, args);
}

  getVisibleCourseNavigationTools(args: Parameters<typeof get_visible_course_navigation_tools>[2]) {
  return get_visible_course_navigation_tools(this.token, this.domain, args);
}

  getVisibleCourseNavigationToolsForSingleCourse(args: Parameters<typeof get_visible_course_navigation_tools_for_single_course>[2]) {
  return get_visible_course_navigation_tools_for_single_course(this.token, this.domain, args);
}

  listFavoriteCourses(args: Parameters<typeof list_favorite_courses>[2]) {
  return list_favorite_courses(this.token, this.domain, args);
}

  listFavoriteGroups(args: Parameters<typeof list_favorite_groups>[2]) {
  return list_favorite_groups(this.token, this.domain, args);
}

  addCourseToFavorites(args: Parameters<typeof add_course_to_favorites>[2]) {
  return add_course_to_favorites(this.token, this.domain, args);
}

  addGroupToFavorites(args: Parameters<typeof add_group_to_favorites>[2]) {
  return add_group_to_favorites(this.token, this.domain, args);
}

  removeCourseFromFavorites(args: Parameters<typeof remove_course_from_favorites>[2]) {
  return remove_course_from_favorites(this.token, this.domain, args);
}

  removeGroupFromFavorites(args: Parameters<typeof remove_group_from_favorites>[2]) {
  return remove_group_from_favorites(this.token, this.domain, args);
}

  resetCourseFavorites(args: Parameters<typeof reset_course_favorites>[2]) {
  return reset_course_favorites(this.token, this.domain, args);
}

  resetGroupFavorites(args: Parameters<typeof reset_group_favorites>[2]) {
  return reset_group_favorites(this.token, this.domain, args);
}

  listFeaturesCourses(args: Parameters<typeof list_features_courses>[2]) {
  return list_features_courses(this.token, this.domain, args);
}

  listFeaturesAccounts(args: Parameters<typeof list_features_accounts>[2]) {
  return list_features_accounts(this.token, this.domain, args);
}

  listFeaturesUsers(args: Parameters<typeof list_features_users>[2]) {
  return list_features_users(this.token, this.domain, args);
}

  listEnabledFeaturesCourses(args: Parameters<typeof list_enabled_features_courses>[2]) {
  return list_enabled_features_courses(this.token, this.domain, args);
}

  listEnabledFeaturesAccounts(args: Parameters<typeof list_enabled_features_accounts>[2]) {
  return list_enabled_features_accounts(this.token, this.domain, args);
}

  listEnabledFeaturesUsers(args: Parameters<typeof list_enabled_features_users>[2]) {
  return list_enabled_features_users(this.token, this.domain, args);
}

  listEnvironmentFeatures(args: Parameters<typeof list_environment_features>[2]) {
  return list_environment_features(this.token, this.domain, args);
}

  getFeatureFlagCourses(args: Parameters<typeof get_feature_flag_courses>[2]) {
  return get_feature_flag_courses(this.token, this.domain, args);
}

  getFeatureFlagAccounts(args: Parameters<typeof get_feature_flag_accounts>[2]) {
  return get_feature_flag_accounts(this.token, this.domain, args);
}

  getFeatureFlagUsers(args: Parameters<typeof get_feature_flag_users>[2]) {
  return get_feature_flag_users(this.token, this.domain, args);
}

  setFeatureFlagCourses(args: Parameters<typeof set_feature_flag_courses>[2]) {
  return set_feature_flag_courses(this.token, this.domain, args);
}

  setFeatureFlagAccounts(args: Parameters<typeof set_feature_flag_accounts>[2]) {
  return set_feature_flag_accounts(this.token, this.domain, args);
}

  setFeatureFlagUsers(args: Parameters<typeof set_feature_flag_users>[2]) {
  return set_feature_flag_users(this.token, this.domain, args);
}

  removeFeatureFlagCourses(args: Parameters<typeof remove_feature_flag_courses>[2]) {
  return remove_feature_flag_courses(this.token, this.domain, args);
}

  removeFeatureFlagAccounts(args: Parameters<typeof remove_feature_flag_accounts>[2]) {
  return remove_feature_flag_accounts(this.token, this.domain, args);
}

  removeFeatureFlagUsers(args: Parameters<typeof remove_feature_flag_users>[2]) {
  return remove_feature_flag_users(this.token, this.domain, args);
}

  getQuotaInformationCourses(args: Parameters<typeof get_quota_information_courses>[2]) {
  return get_quota_information_courses(this.token, this.domain, args);
}

  getQuotaInformationGroups(args: Parameters<typeof get_quota_information_groups>[2]) {
  return get_quota_information_groups(this.token, this.domain, args);
}

  getQuotaInformationUsers(args: Parameters<typeof get_quota_information_users>[2]) {
  return get_quota_information_users(this.token, this.domain, args);
}

  listFilesCourses(args: Parameters<typeof list_files_courses>[2]) {
  return list_files_courses(this.token, this.domain, args);
}

  listFilesUsers(args: Parameters<typeof list_files_users>[2]) {
  return list_files_users(this.token, this.domain, args);
}

  listFilesGroups(args: Parameters<typeof list_files_groups>[2]) {
  return list_files_groups(this.token, this.domain, args);
}

  listFilesFolders(args: Parameters<typeof list_files_folders>[2]) {
  return list_files_folders(this.token, this.domain, args);
}

  getPublicInlinePreviewUrl(args: Parameters<typeof get_public_inline_preview_url>[2]) {
  return get_public_inline_preview_url(this.token, this.domain, args);
}

  getFileFiles(args: Parameters<typeof get_file_files>[2]) {
  return get_file_files(this.token, this.domain, args);
}

  getFileCourses(args: Parameters<typeof get_file_courses>[2]) {
  return get_file_courses(this.token, this.domain, args);
}

  getFileGroups(args: Parameters<typeof get_file_groups>[2]) {
  return get_file_groups(this.token, this.domain, args);
}

  getFileUsers(args: Parameters<typeof get_file_users>[2]) {
  return get_file_users(this.token, this.domain, args);
}

  translateFileReference(args: Parameters<typeof translate_file_reference>[2]) {
  return translate_file_reference(this.token, this.domain, args);
}

  updateFile(args: Parameters<typeof update_file>[2]) {
  return update_file(this.token, this.domain, args);
}

  deleteFile(args: Parameters<typeof delete_file>[2]) {
  return delete_file(this.token, this.domain, args);
}

  getIconMetadata(args: Parameters<typeof get_icon_metadata>[2]) {
  return get_icon_metadata(this.token, this.domain, args);
}

  resetLinkVerifier(args: Parameters<typeof reset_link_verifier>[2]) {
  return reset_link_verifier(this.token, this.domain, args);
}

  listFolders(args: Parameters<typeof list_folders>[2]) {
  return list_folders(this.token, this.domain, args);
}

  listFoldersAndFiles(args: Parameters<typeof list_folders_and_files>[2]) {
  return list_folders_and_files(this.token, this.domain, args);
}

  listAllFoldersCourses(args: Parameters<typeof list_all_folders_courses>[2]) {
  return list_all_folders_courses(this.token, this.domain, args);
}

  listAllFoldersUsers(args: Parameters<typeof list_all_folders_users>[2]) {
  return list_all_folders_users(this.token, this.domain, args);
}

  listAllFoldersGroups(args: Parameters<typeof list_all_folders_groups>[2]) {
  return list_all_folders_groups(this.token, this.domain, args);
}

  resolvePathCoursesFullPath(args: Parameters<typeof resolve_path_courses_full_path>[2]) {
  return resolve_path_courses_full_path(this.token, this.domain, args);
}

  resolvePathCourses(args: Parameters<typeof resolve_path_courses>[2]) {
  return resolve_path_courses(this.token, this.domain, args);
}

  resolvePathUsersFullPath(args: Parameters<typeof resolve_path_users_full_path>[2]) {
  return resolve_path_users_full_path(this.token, this.domain, args);
}

  resolvePathUsers(args: Parameters<typeof resolve_path_users>[2]) {
  return resolve_path_users(this.token, this.domain, args);
}

  resolvePathGroupsFullPath(args: Parameters<typeof resolve_path_groups_full_path>[2]) {
  return resolve_path_groups_full_path(this.token, this.domain, args);
}

  resolvePathGroups(args: Parameters<typeof resolve_path_groups>[2]) {
  return resolve_path_groups(this.token, this.domain, args);
}

  getFolderCourses(args: Parameters<typeof get_folder_courses>[2]) {
  return get_folder_courses(this.token, this.domain, args);
}

  getFolderUsers(args: Parameters<typeof get_folder_users>[2]) {
  return get_folder_users(this.token, this.domain, args);
}

  getFolderGroups(args: Parameters<typeof get_folder_groups>[2]) {
  return get_folder_groups(this.token, this.domain, args);
}

  getFolderFolders(args: Parameters<typeof get_folder_folders>[2]) {
  return get_folder_folders(this.token, this.domain, args);
}

  updateFolder(args: Parameters<typeof update_folder>[2]) {
  return update_folder(this.token, this.domain, args);
}

  createFolderCourses(args: Parameters<typeof create_folder_courses>[2]) {
  return create_folder_courses(this.token, this.domain, args);
}

  createFolderUsers(args: Parameters<typeof create_folder_users>[2]) {
  return create_folder_users(this.token, this.domain, args);
}

  createFolderGroups(args: Parameters<typeof create_folder_groups>[2]) {
  return create_folder_groups(this.token, this.domain, args);
}

  createFolderFolders(args: Parameters<typeof create_folder_folders>[2]) {
  return create_folder_folders(this.token, this.domain, args);
}

  createFolderAccounts(args: Parameters<typeof create_folder_accounts>[2]) {
  return create_folder_accounts(this.token, this.domain, args);
}

  deleteFolder(args: Parameters<typeof delete_folder>[2]) {
  return delete_folder(this.token, this.domain, args);
}

  copyFile(args: Parameters<typeof copy_file>[2]) {
  return copy_file(this.token, this.domain, args);
}

  copyFolder(args: Parameters<typeof copy_folder>[2]) {
  return copy_folder(this.token, this.domain, args);
}

  getUploadedMediaFolderForUserCourses(args: Parameters<typeof get_uploaded_media_folder_for_user_courses>[2]) {
  return get_uploaded_media_folder_for_user_courses(this.token, this.domain, args);
}

  getUploadedMediaFolderForUserGroups(args: Parameters<typeof get_uploaded_media_folder_for_user_groups>[2]) {
  return get_uploaded_media_folder_for_user_groups(this.token, this.domain, args);
}

  setUsageRightsCourses(args: Parameters<typeof set_usage_rights_courses>[2]) {
  return set_usage_rights_courses(this.token, this.domain, args);
}

  setUsageRightsGroups(args: Parameters<typeof set_usage_rights_groups>[2]) {
  return set_usage_rights_groups(this.token, this.domain, args);
}

  setUsageRightsUsers(args: Parameters<typeof set_usage_rights_users>[2]) {
  return set_usage_rights_users(this.token, this.domain, args);
}

  removeUsageRightsCourses(args: Parameters<typeof remove_usage_rights_courses>[2]) {
  return remove_usage_rights_courses(this.token, this.domain, args);
}

  removeUsageRightsGroups(args: Parameters<typeof remove_usage_rights_groups>[2]) {
  return remove_usage_rights_groups(this.token, this.domain, args);
}

  removeUsageRightsUsers(args: Parameters<typeof remove_usage_rights_users>[2]) {
  return remove_usage_rights_users(this.token, this.domain, args);
}

  listLicensesCourses(args: Parameters<typeof list_licenses_courses>[2]) {
  return list_licenses_courses(this.token, this.domain, args);
}

  listLicensesGroups(args: Parameters<typeof list_licenses_groups>[2]) {
  return list_licenses_groups(this.token, this.domain, args);
}

  listLicensesUsers(args: Parameters<typeof list_licenses_users>[2]) {
  return list_licenses_users(this.token, this.domain, args);
}

  queryByAssignment(args: Parameters<typeof query_by_assignment>[2]) {
  return query_by_assignment(this.token, this.domain, args);
}

  queryByStudent(args: Parameters<typeof query_by_student>[2]) {
  return query_by_student(this.token, this.domain, args);
}

  queryByGrader(args: Parameters<typeof query_by_grader>[2]) {
  return query_by_grader(this.token, this.domain, args);
}

  advancedQuery(args: Parameters<typeof advanced_query>[2]) {
  return advanced_query(this.token, this.domain, args);
}

  daysInGradebookHistoryForThisCourse(args: Parameters<typeof days_in_gradebook_history_for_this_course>[2]) {
  return days_in_gradebook_history_for_this_course(this.token, this.domain, args);
}

  detailsForGivenDateInGradebookHistoryForThisCourse(args: Parameters<typeof details_for_given_date_in_gradebook_history_for_this_course>[2]) {
  return details_for_given_date_in_gradebook_history_for_this_course(this.token, this.domain, args);
}

  listsSubmissions(args: Parameters<typeof lists_submissions>[2]) {
  return lists_submissions(this.token, this.domain, args);
}

  listUncollatedSubmissionVersions(args: Parameters<typeof list_uncollated_submission_versions>[2]) {
  return list_uncollated_submission_versions(this.token, this.domain, args);
}

  listGradingPeriodSets(args: Parameters<typeof list_grading_period_sets>[2]) {
  return list_grading_period_sets(this.token, this.domain, args);
}

  createGradingPeriodSet(args: Parameters<typeof create_grading_period_set>[2]) {
  return create_grading_period_set(this.token, this.domain, args);
}

  updateGradingPeriodSet(args: Parameters<typeof update_grading_period_set>[2]) {
  return update_grading_period_set(this.token, this.domain, args);
}

  deleteGradingPeriodSet(args: Parameters<typeof delete_grading_period_set>[2]) {
  return delete_grading_period_set(this.token, this.domain, args);
}

  listGradingPeriodsAccounts(args: Parameters<typeof list_grading_periods_accounts>[2]) {
  return list_grading_periods_accounts(this.token, this.domain, args);
}

  listGradingPeriodsCourses(args: Parameters<typeof list_grading_periods_courses>[2]) {
  return list_grading_periods_courses(this.token, this.domain, args);
}

  getSingleGradingPeriod(args: Parameters<typeof get_single_grading_period>[2]) {
  return get_single_grading_period(this.token, this.domain, args);
}

  updateSingleGradingPeriod(args: Parameters<typeof update_single_grading_period>[2]) {
  return update_single_grading_period(this.token, this.domain, args);
}

  deleteGradingPeriodCourses(args: Parameters<typeof delete_grading_period_courses>[2]) {
  return delete_grading_period_courses(this.token, this.domain, args);
}

  deleteGradingPeriodAccounts(args: Parameters<typeof delete_grading_period_accounts>[2]) {
  return delete_grading_period_accounts(this.token, this.domain, args);
}

  batchUpdateGradingPeriodsCourses(args: Parameters<typeof batch_update_grading_periods_courses>[2]) {
  return batch_update_grading_periods_courses(this.token, this.domain, args);
}

  batchUpdateGradingPeriodsGradingPeriodSets(args: Parameters<typeof batch_update_grading_periods_grading_period_sets>[2]) {
  return batch_update_grading_periods_grading_period_sets(this.token, this.domain, args);
}

  createNewGradingStandardAccounts(args: Parameters<typeof create_new_grading_standard_accounts>[2]) {
  return create_new_grading_standard_accounts(this.token, this.domain, args);
}

  createNewGradingStandardCourses(args: Parameters<typeof create_new_grading_standard_courses>[2]) {
  return create_new_grading_standard_courses(this.token, this.domain, args);
}

  listGradingStandardsAvailableInContextCourses(args: Parameters<typeof list_grading_standards_available_in_context_courses>[2]) {
  return list_grading_standards_available_in_context_courses(this.token, this.domain, args);
}

  listGradingStandardsAvailableInContextAccounts(args: Parameters<typeof list_grading_standards_available_in_context_accounts>[2]) {
  return list_grading_standards_available_in_context_accounts(this.token, this.domain, args);
}

  getSingleGradingStandardInContextCourses(args: Parameters<typeof get_single_grading_standard_in_context_courses>[2]) {
  return get_single_grading_standard_in_context_courses(this.token, this.domain, args);
}

  getSingleGradingStandardInContextAccounts(args: Parameters<typeof get_single_grading_standard_in_context_accounts>[2]) {
  return get_single_grading_standard_in_context_accounts(this.token, this.domain, args);
}

  listGroupCategoriesForContextAccounts(args: Parameters<typeof list_group_categories_for_context_accounts>[2]) {
  return list_group_categories_for_context_accounts(this.token, this.domain, args);
}

  listGroupCategoriesForContextCourses(args: Parameters<typeof list_group_categories_for_context_courses>[2]) {
  return list_group_categories_for_context_courses(this.token, this.domain, args);
}

  getSingleGroupCategory(args: Parameters<typeof get_single_group_category>[2]) {
  return get_single_group_category(this.token, this.domain, args);
}

  createGroupCategoryAccounts(args: Parameters<typeof create_group_category_accounts>[2]) {
  return create_group_category_accounts(this.token, this.domain, args);
}

  createGroupCategoryCourses(args: Parameters<typeof create_group_category_courses>[2]) {
  return create_group_category_courses(this.token, this.domain, args);
}

  bulkManageDifferentiationTags(args: Parameters<typeof bulk_manage_differentiation_tags>[2]) {
  return bulk_manage_differentiation_tags(this.token, this.domain, args);
}

  importCategoryGroups(args: Parameters<typeof import_category_groups>[2]) {
  return import_category_groups(this.token, this.domain, args);
}

  updateGroupCategory(args: Parameters<typeof update_group_category>[2]) {
  return update_group_category(this.token, this.domain, args);
}

  deleteGroupCategory(args: Parameters<typeof delete_group_category>[2]) {
  return delete_group_category(this.token, this.domain, args);
}

  listGroupsInGroupCategory(args: Parameters<typeof list_groups_in_group_category>[2]) {
  return list_groups_in_group_category(this.token, this.domain, args);
}

  exportGroupsInAndUsersInCategory(args: Parameters<typeof export_groups_in_and_users_in_category>[2]) {
  return export_groups_in_and_users_in_category(this.token, this.domain, args);
}

  listUsersInGroupCategory(args: Parameters<typeof list_users_in_group_category>[2]) {
  return list_users_in_group_category(this.token, this.domain, args);
}

  assignUnassignedMembers(args: Parameters<typeof assign_unassigned_members>[2]) {
  return assign_unassigned_members(this.token, this.domain, args);
}

  listYourGroups(args: Parameters<typeof list_your_groups>[2]) {
  return list_your_groups(this.token, this.domain, args);
}

  listGroupsAvailableInContextAccounts(args: Parameters<typeof list_groups_available_in_context_accounts>[2]) {
  return list_groups_available_in_context_accounts(this.token, this.domain, args);
}

  listGroupsAvailableInContextCourses(args: Parameters<typeof list_groups_available_in_context_courses>[2]) {
  return list_groups_available_in_context_courses(this.token, this.domain, args);
}

  getSingleGroup(args: Parameters<typeof get_single_group>[2]) {
  return get_single_group(this.token, this.domain, args);
}

  createGroupGroups(args: Parameters<typeof create_group_groups>[2]) {
  return create_group_groups(this.token, this.domain, args);
}

  createGroupGroupCategories(args: Parameters<typeof create_group_group_categories>[2]) {
  return create_group_group_categories(this.token, this.domain, args);
}

  editGroup(args: Parameters<typeof edit_group>[2]) {
  return edit_group(this.token, this.domain, args);
}

  deleteGroup(args: Parameters<typeof delete_group>[2]) {
  return delete_group(this.token, this.domain, args);
}

  inviteOthersToGroup(args: Parameters<typeof invite_others_to_group>[2]) {
  return invite_others_to_group(this.token, this.domain, args);
}

  listGroupSUsers(args: Parameters<typeof list_group_s_users>[2]) {
  return list_group_s_users(this.token, this.domain, args);
}

  groupActivityStream(args: Parameters<typeof group_activity_stream>[2]) {
  return group_activity_stream(this.token, this.domain, args);
}

  groupActivityStreamSummary(args: Parameters<typeof group_activity_stream_summary>[2]) {
  return group_activity_stream_summary(this.token, this.domain, args);
}

  listGroupMemberships(args: Parameters<typeof list_group_memberships>[2]) {
  return list_group_memberships(this.token, this.domain, args);
}

  getSingleGroupMembershipMemberships(args: Parameters<typeof get_single_group_membership_memberships>[2]) {
  return get_single_group_membership_memberships(this.token, this.domain, args);
}

  getSingleGroupMembershipUsers(args: Parameters<typeof get_single_group_membership_users>[2]) {
  return get_single_group_membership_users(this.token, this.domain, args);
}

  createMembership(args: Parameters<typeof create_membership>[2]) {
  return create_membership(this.token, this.domain, args);
}

  updateMembershipMemberships(args: Parameters<typeof update_membership_memberships>[2]) {
  return update_membership_memberships(this.token, this.domain, args);
}

  updateMembershipUsers(args: Parameters<typeof update_membership_users>[2]) {
  return update_membership_users(this.token, this.domain, args);
}

  leaveGroupMemberships(args: Parameters<typeof leave_group_memberships>[2]) {
  return leave_group_memberships(this.token, this.domain, args);
}

  leaveGroupUsers(args: Parameters<typeof leave_group_users>[2]) {
  return leave_group_users(this.token, this.domain, args);
}

  listRecentHistoryForUser(args: Parameters<typeof list_recent_history_for_user>[2]) {
  return list_recent_history_for_user(this.token, this.domain, args);
}

  createInstaccessToken(args: Parameters<typeof create_instaccess_token>[2]) {
  return create_instaccess_token(this.token, this.domain, args);
}

  createJwt(args: Parameters<typeof create_jwt>[2]) {
  return create_jwt(this.token, this.domain, args);
}

  refreshJwt(args: Parameters<typeof refresh_jwt>[2]) {
  return refresh_jwt(this.token, this.domain, args);
}

  getLatePolicy(args: Parameters<typeof get_late_policy>[2]) {
  return get_late_policy(this.token, this.domain, args);
}

  createLatePolicy(args: Parameters<typeof create_late_policy>[2]) {
  return create_late_policy(this.token, this.domain, args);
}

  patchLatePolicy(args: Parameters<typeof patch_late_policy>[2]) {
  return patch_late_policy(this.token, this.domain, args);
}

  getLearningObjectSDateInformationModules(args: Parameters<typeof get_learning_object_s_date_information_modules>[2]) {
  return get_learning_object_s_date_information_modules(this.token, this.domain, args);
}

  getLearningObjectSDateInformationAssignments(args: Parameters<typeof get_learning_object_s_date_information_assignments>[2]) {
  return get_learning_object_s_date_information_assignments(this.token, this.domain, args);
}

  getLearningObjectSDateInformationQuizzes(args: Parameters<typeof get_learning_object_s_date_information_quizzes>[2]) {
  return get_learning_object_s_date_information_quizzes(this.token, this.domain, args);
}

  getLearningObjectSDateInformationDiscussionTopics(args: Parameters<typeof get_learning_object_s_date_information_discussion_topics>[2]) {
  return get_learning_object_s_date_information_discussion_topics(this.token, this.domain, args);
}

  getLearningObjectSDateInformationPages(args: Parameters<typeof get_learning_object_s_date_information_pages>[2]) {
  return get_learning_object_s_date_information_pages(this.token, this.domain, args);
}

  getLearningObjectSDateInformationFiles(args: Parameters<typeof get_learning_object_s_date_information_files>[2]) {
  return get_learning_object_s_date_information_files(this.token, this.domain, args);
}

  updateLearningObjectSDateInformationAssignments(args: Parameters<typeof update_learning_object_s_date_information_assignments>[2]) {
  return update_learning_object_s_date_information_assignments(this.token, this.domain, args);
}

  updateLearningObjectSDateInformationQuizzes(args: Parameters<typeof update_learning_object_s_date_information_quizzes>[2]) {
  return update_learning_object_s_date_information_quizzes(this.token, this.domain, args);
}

  updateLearningObjectSDateInformationDiscussionTopics(args: Parameters<typeof update_learning_object_s_date_information_discussion_topics>[2]) {
  return update_learning_object_s_date_information_discussion_topics(this.token, this.domain, args);
}

  updateLearningObjectSDateInformationPages(args: Parameters<typeof update_learning_object_s_date_information_pages>[2]) {
  return update_learning_object_s_date_information_pages(this.token, this.domain, args);
}

  updateLearningObjectSDateInformationFiles(args: Parameters<typeof update_learning_object_s_date_information_files>[2]) {
  return update_learning_object_s_date_information_files(this.token, this.domain, args);
}

  createLineItem(args: Parameters<typeof create_line_item>[2]) {
  return create_line_item(this.token, this.domain, args);
}

  updateLineItem(args: Parameters<typeof update_line_item>[2]) {
  return update_line_item(this.token, this.domain, args);
}

  showLineItem(args: Parameters<typeof show_line_item>[2]) {
  return show_line_item(this.token, this.domain, args);
}

  listLineItems(args: Parameters<typeof list_line_items>[2]) {
  return list_line_items(this.token, this.domain, args);
}

  deleteLineItem(args: Parameters<typeof delete_line_item>[2]) {
  return delete_line_item(this.token, this.domain, args);
}

  createLiveAssessmentResults(args: Parameters<typeof create_live_assessment_results>[2]) {
  return create_live_assessment_results(this.token, this.domain, args);
}

  listLiveAssessmentResults(args: Parameters<typeof list_live_assessment_results>[2]) {
  return list_live_assessment_results(this.token, this.domain, args);
}

  createOrFindLiveAssessment(args: Parameters<typeof create_or_find_live_assessment>[2]) {
  return create_or_find_live_assessment(this.token, this.domain, args);
}

  listLiveAssessments(args: Parameters<typeof list_live_assessments>[2]) {
  return list_live_assessments(this.token, this.domain, args);
}

  listUserLoginsAccounts(args: Parameters<typeof list_user_logins_accounts>[2]) {
  return list_user_logins_accounts(this.token, this.domain, args);
}

  listUserLoginsUsers(args: Parameters<typeof list_user_logins_users>[2]) {
  return list_user_logins_users(this.token, this.domain, args);
}

  kickoffPasswordRecoveryFlow(args: Parameters<typeof kickoff_password_recovery_flow>[2]) {
  return kickoff_password_recovery_flow(this.token, this.domain, args);
}

  createUserLogin(args: Parameters<typeof create_user_login>[2]) {
  return create_user_login(this.token, this.domain, args);
}

  editUserLogin(args: Parameters<typeof edit_user_login>[2]) {
  return edit_user_login(this.token, this.domain, args);
}

  deleteUserLogin(args: Parameters<typeof delete_user_login>[2]) {
  return delete_user_login(this.token, this.domain, args);
}

  listLtiLaunchDefinitionsCourses(args: Parameters<typeof list_lti_launch_definitions_courses>[2]) {
  return list_lti_launch_definitions_courses(this.token, this.domain, args);
}

  listLtiLaunchDefinitionsAccounts(args: Parameters<typeof list_lti_launch_definitions_accounts>[2]) {
  return list_lti_launch_definitions_accounts(this.token, this.domain, args);
}

  listLtiRegistrationsInAccount(args: Parameters<typeof list_lti_registrations_in_account>[2]) {
  return list_lti_registrations_in_account(this.token, this.domain, args);
}

  showLtiRegistration(args: Parameters<typeof show_lti_registration>[2]) {
  return show_lti_registration(this.token, this.domain, args);
}

  createLtiRegistration(args: Parameters<typeof create_lti_registration>[2]) {
  return create_lti_registration(this.token, this.domain, args);
}

  showLtiRegistrationViaClientId(args: Parameters<typeof show_lti_registration_via_client_id>[2]) {
  return show_lti_registration_via_client_id(this.token, this.domain, args);
}

  updateLtiRegistration(args: Parameters<typeof update_lti_registration>[2]) {
  return update_lti_registration(this.token, this.domain, args);
}

  resetLtiRegistrationToDefaults(args: Parameters<typeof reset_lti_registration_to_defaults>[2]) {
  return reset_lti_registration_to_defaults(this.token, this.domain, args);
}

  deleteLtiRegistration(args: Parameters<typeof delete_lti_registration>[2]) {
  return delete_lti_registration(this.token, this.domain, args);
}

  bindLtiRegistrationToAccount(args: Parameters<typeof bind_lti_registration_to_account>[2]) {
  return bind_lti_registration_to_account(this.token, this.domain, args);
}

  listLtiResourceLinks(args: Parameters<typeof list_lti_resource_links>[2]) {
  return list_lti_resource_links(this.token, this.domain, args);
}

  showLtiResourceLink(args: Parameters<typeof show_lti_resource_link>[2]) {
  return show_lti_resource_link(this.token, this.domain, args);
}

  createLtiResourceLink(args: Parameters<typeof create_lti_resource_link>[2]) {
  return create_lti_resource_link(this.token, this.domain, args);
}

  bulkCreateLtiResourceLinks(args: Parameters<typeof bulk_create_lti_resource_links>[2]) {
  return bulk_create_lti_resource_links(this.token, this.domain, args);
}

  updateLtiResourceLink(args: Parameters<typeof update_lti_resource_link>[2]) {
  return update_lti_resource_link(this.token, this.domain, args);
}

  deleteLtiResourceLink(args: Parameters<typeof delete_lti_resource_link>[2]) {
  return delete_lti_resource_link(this.token, this.domain, args);
}

  listMediaTracksForMediaObjectOrAttachmentMediaObjects(args: Parameters<typeof list_media_tracks_for_media_object_or_attachment_media_objects>[2]) {
  return list_media_tracks_for_media_object_or_attachment_media_objects(this.token, this.domain, args);
}

  listMediaTracksForMediaObjectOrAttachmentMediaAttachments(args: Parameters<typeof list_media_tracks_for_media_object_or_attachment_media_attachments>[2]) {
  return list_media_tracks_for_media_object_or_attachment_media_attachments(this.token, this.domain, args);
}

  updateMediaTracksMediaObjects(args: Parameters<typeof update_media_tracks_media_objects>[2]) {
  return update_media_tracks_media_objects(this.token, this.domain, args);
}

  updateMediaTracksMediaAttachments(args: Parameters<typeof update_media_tracks_media_attachments>[2]) {
  return update_media_tracks_media_attachments(this.token, this.domain, args);
}

  listMediaObjectsMediaObjects(args: Parameters<typeof list_media_objects_media_objects>[2]) {
  return list_media_objects_media_objects(this.token, this.domain, args);
}

  listMediaObjectsCoursesMediaObjects(args: Parameters<typeof list_media_objects_courses_media_objects>[2]) {
  return list_media_objects_courses_media_objects(this.token, this.domain, args);
}

  listMediaObjectsGroupsMediaObjects(args: Parameters<typeof list_media_objects_groups_media_objects>[2]) {
  return list_media_objects_groups_media_objects(this.token, this.domain, args);
}

  listMediaObjectsMediaAttachments(args: Parameters<typeof list_media_objects_media_attachments>[2]) {
  return list_media_objects_media_attachments(this.token, this.domain, args);
}

  listMediaObjectsCoursesMediaAttachments(args: Parameters<typeof list_media_objects_courses_media_attachments>[2]) {
  return list_media_objects_courses_media_attachments(this.token, this.domain, args);
}

  listMediaObjectsGroupsMediaAttachments(args: Parameters<typeof list_media_objects_groups_media_attachments>[2]) {
  return list_media_objects_groups_media_attachments(this.token, this.domain, args);
}

  updateMediaObjectMediaObjects(args: Parameters<typeof update_media_object_media_objects>[2]) {
  return update_media_object_media_objects(this.token, this.domain, args);
}

  updateMediaObjectMediaAttachments(args: Parameters<typeof update_media_object_media_attachments>[2]) {
  return update_media_object_media_attachments(this.token, this.domain, args);
}

  listStudentsSelectedForModeration(args: Parameters<typeof list_students_selected_for_moderation>[2]) {
  return list_students_selected_for_moderation(this.token, this.domain, args);
}

  selectStudentsForModeration(args: Parameters<typeof select_students_for_moderation>[2]) {
  return select_students_for_moderation(this.token, this.domain, args);
}

  bulkSelectProvisionalGrades(args: Parameters<typeof bulk_select_provisional_grades>[2]) {
  return bulk_select_provisional_grades(this.token, this.domain, args);
}

  showProvisionalGradeStatusForStudent(args: Parameters<typeof show_provisional_grade_status_for_student>[2]) {
  return show_provisional_grade_status_for_student(this.token, this.domain, args);
}

  selectProvisionalGrade(args: Parameters<typeof select_provisional_grade>[2]) {
  return select_provisional_grade(this.token, this.domain, args);
}

  publishProvisionalGradesForAssignment(args: Parameters<typeof publish_provisional_grades_for_assignment>[2]) {
  return publish_provisional_grades_for_assignment(this.token, this.domain, args);
}

  listModules(args: Parameters<typeof list_modules>[2]) {
  return list_modules(this.token, this.domain, args);
}

  showModule(args: Parameters<typeof show_module>[2]) {
  return show_module(this.token, this.domain, args);
}

  createModule(args: Parameters<typeof create_module>[2]) {
  return create_module(this.token, this.domain, args);
}

  updateModule(args: Parameters<typeof update_module>[2]) {
  return update_module(this.token, this.domain, args);
}

  deleteModule(args: Parameters<typeof delete_module>[2]) {
  return delete_module(this.token, this.domain, args);
}

  reLockModuleProgressions(args: Parameters<typeof re_lock_module_progressions>[2]) {
  return re_lock_module_progressions(this.token, this.domain, args);
}

  listModuleItems(args: Parameters<typeof list_module_items>[2]) {
  return list_module_items(this.token, this.domain, args);
}

  showModuleItem(args: Parameters<typeof show_module_item>[2]) {
  return show_module_item(this.token, this.domain, args);
}

  createModuleItem(args: Parameters<typeof create_module_item>[2]) {
  return create_module_item(this.token, this.domain, args);
}

  updateModuleItem(args: Parameters<typeof update_module_item>[2]) {
  return update_module_item(this.token, this.domain, args);
}

  selectMasteryPath(args: Parameters<typeof select_mastery_path>[2]) {
  return select_mastery_path(this.token, this.domain, args);
}

  deleteModuleItem(args: Parameters<typeof delete_module_item>[2]) {
  return delete_module_item(this.token, this.domain, args);
}

  markModuleItemAsDoneNotDone(args: Parameters<typeof mark_module_item_as_done_not_done>[2]) {
  return mark_module_item_as_done_not_done(this.token, this.domain, args);
}

  getModuleItemSequence(args: Parameters<typeof get_module_item_sequence>[2]) {
  return get_module_item_sequence(this.token, this.domain, args);
}

  markModuleItemRead(args: Parameters<typeof mark_module_item_read>[2]) {
  return mark_module_item_read(this.token, this.domain, args);
}

  listModuleSOverrides(args: Parameters<typeof list_module_s_overrides>[2]) {
  return list_module_s_overrides(this.token, this.domain, args);
}

  updateModuleSOverrides(args: Parameters<typeof update_module_s_overrides>[2]) {
  return update_module_s_overrides(this.token, this.domain, args);
}

  listCourseMemberships(args: Parameters<typeof list_course_memberships>[2]) {
  return list_course_memberships(this.token, this.domain, args);
}

  getQuizItem(args: Parameters<typeof get_quiz_item>[2]) {
  return get_quiz_item(this.token, this.domain, args);
}

  listQuizItems(args: Parameters<typeof list_quiz_items>[2]) {
  return list_quiz_items(this.token, this.domain, args);
}

  createQuizItem(args: Parameters<typeof create_quiz_item>[2]) {
  return create_quiz_item(this.token, this.domain, args);
}

  updateQuizItem(args: Parameters<typeof update_quiz_item>[2]) {
  return update_quiz_item(this.token, this.domain, args);
}

  deleteQuizItem(args: Parameters<typeof delete_quiz_item>[2]) {
  return delete_quiz_item(this.token, this.domain, args);
}

  getItemsMediaUploadUrl(args: Parameters<typeof get_items_media_upload_url>[2]) {
  return get_items_media_upload_url(this.token, this.domain, args);
}

  getNewQuiz(args: Parameters<typeof get_new_quiz>[2]) {
  return get_new_quiz(this.token, this.domain, args);
}

  listNewQuizzes(args: Parameters<typeof list_new_quizzes>[2]) {
  return list_new_quizzes(this.token, this.domain, args);
}

  createNewQuiz(args: Parameters<typeof create_new_quiz>[2]) {
  return create_new_quiz(this.token, this.domain, args);
}

  updateSingleQuiz(args: Parameters<typeof update_single_quiz>[2]) {
  return update_single_quiz(this.token, this.domain, args);
}

  deleteNewQuiz(args: Parameters<typeof delete_new_quiz>[2]) {
  return delete_new_quiz(this.token, this.domain, args);
}

  setQuizLevelAccommodations(args: Parameters<typeof set_quiz_level_accommodations>[2]) {
  return set_quiz_level_accommodations(this.token, this.domain, args);
}

  setCourseLevelAccommodations(args: Parameters<typeof set_course_level_accommodations>[2]) {
  return set_course_level_accommodations(this.token, this.domain, args);
}

  createQuizReport(args: Parameters<typeof create_quiz_report>[2]) {
  return create_quiz_report(this.token, this.domain, args);
}

  listPreferencesCommunicationChannelId(args: Parameters<typeof list_preferences_communication_channel_id>[2]) {
  return list_preferences_communication_channel_id(this.token, this.domain, args);
}

  listPreferencesType(args: Parameters<typeof list_preferences_type>[2]) {
  return list_preferences_type(this.token, this.domain, args);
}

  listOfPreferenceCategories(args: Parameters<typeof list_of_preference_categories>[2]) {
  return list_of_preference_categories(this.token, this.domain, args);
}

  getPreferenceCommunicationChannelId(args: Parameters<typeof get_preference_communication_channel_id>[2]) {
  return get_preference_communication_channel_id(this.token, this.domain, args);
}

  getPreferenceType(args: Parameters<typeof get_preference_type>[2]) {
  return get_preference_type(this.token, this.domain, args);
}

  updatePreferenceCommunicationChannelId(args: Parameters<typeof update_preference_communication_channel_id>[2]) {
  return update_preference_communication_channel_id(this.token, this.domain, args);
}

  updatePreferenceType(args: Parameters<typeof update_preference_type>[2]) {
  return update_preference_type(this.token, this.domain, args);
}

  updatePreferencesByCategory(args: Parameters<typeof update_preferences_by_category>[2]) {
  return update_preferences_by_category(this.token, this.domain, args);
}

  updateMultiplePreferencesCommunicationChannelId(args: Parameters<typeof update_multiple_preferences_communication_channel_id>[2]) {
  return update_multiple_preferences_communication_channel_id(this.token, this.domain, args);
}

  updateMultiplePreferencesType(args: Parameters<typeof update_multiple_preferences_type>[2]) {
  return update_multiple_preferences_type(this.token, this.domain, args);
}

  createOriginalityReport(args: Parameters<typeof create_originality_report>[2]) {
  return create_originality_report(this.token, this.domain, args);
}

  editOriginalityReportSubmissions(args: Parameters<typeof edit_originality_report_submissions>[2]) {
  return edit_originality_report_submissions(this.token, this.domain, args);
}

  editOriginalityReportFiles(args: Parameters<typeof edit_originality_report_files>[2]) {
  return edit_originality_report_files(this.token, this.domain, args);
}

  showOriginalityReportSubmissions(args: Parameters<typeof show_originality_report_submissions>[2]) {
  return show_originality_report_submissions(this.token, this.domain, args);
}

  showOriginalityReportFiles(args: Parameters<typeof show_originality_report_files>[2]) {
  return show_originality_report_files(this.token, this.domain, args);
}

  redirectToRootOutcomeGroupForContextGlobal(args: Parameters<typeof redirect_to_root_outcome_group_for_context_global>[2]) {
  return redirect_to_root_outcome_group_for_context_global(this.token, this.domain, args);
}

  redirectToRootOutcomeGroupForContextAccounts(args: Parameters<typeof redirect_to_root_outcome_group_for_context_accounts>[2]) {
  return redirect_to_root_outcome_group_for_context_accounts(this.token, this.domain, args);
}

  redirectToRootOutcomeGroupForContextCourses(args: Parameters<typeof redirect_to_root_outcome_group_for_context_courses>[2]) {
  return redirect_to_root_outcome_group_for_context_courses(this.token, this.domain, args);
}

  getAllOutcomeGroupsForContextAccounts(args: Parameters<typeof get_all_outcome_groups_for_context_accounts>[2]) {
  return get_all_outcome_groups_for_context_accounts(this.token, this.domain, args);
}

  getAllOutcomeGroupsForContextCourses(args: Parameters<typeof get_all_outcome_groups_for_context_courses>[2]) {
  return get_all_outcome_groups_for_context_courses(this.token, this.domain, args);
}

  getAllOutcomeLinksForContextAccounts(args: Parameters<typeof get_all_outcome_links_for_context_accounts>[2]) {
  return get_all_outcome_links_for_context_accounts(this.token, this.domain, args);
}

  getAllOutcomeLinksForContextCourses(args: Parameters<typeof get_all_outcome_links_for_context_courses>[2]) {
  return get_all_outcome_links_for_context_courses(this.token, this.domain, args);
}

  showOutcomeGroupGlobal(args: Parameters<typeof show_outcome_group_global>[2]) {
  return show_outcome_group_global(this.token, this.domain, args);
}

  showOutcomeGroupAccounts(args: Parameters<typeof show_outcome_group_accounts>[2]) {
  return show_outcome_group_accounts(this.token, this.domain, args);
}

  showOutcomeGroupCourses(args: Parameters<typeof show_outcome_group_courses>[2]) {
  return show_outcome_group_courses(this.token, this.domain, args);
}

  updateOutcomeGroupGlobal(args: Parameters<typeof update_outcome_group_global>[2]) {
  return update_outcome_group_global(this.token, this.domain, args);
}

  updateOutcomeGroupAccounts(args: Parameters<typeof update_outcome_group_accounts>[2]) {
  return update_outcome_group_accounts(this.token, this.domain, args);
}

  updateOutcomeGroupCourses(args: Parameters<typeof update_outcome_group_courses>[2]) {
  return update_outcome_group_courses(this.token, this.domain, args);
}

  deleteOutcomeGroupGlobal(args: Parameters<typeof delete_outcome_group_global>[2]) {
  return delete_outcome_group_global(this.token, this.domain, args);
}

  deleteOutcomeGroupAccounts(args: Parameters<typeof delete_outcome_group_accounts>[2]) {
  return delete_outcome_group_accounts(this.token, this.domain, args);
}

  deleteOutcomeGroupCourses(args: Parameters<typeof delete_outcome_group_courses>[2]) {
  return delete_outcome_group_courses(this.token, this.domain, args);
}

  listLinkedOutcomesGlobal(args: Parameters<typeof list_linked_outcomes_global>[2]) {
  return list_linked_outcomes_global(this.token, this.domain, args);
}

  listLinkedOutcomesAccounts(args: Parameters<typeof list_linked_outcomes_accounts>[2]) {
  return list_linked_outcomes_accounts(this.token, this.domain, args);
}

  listLinkedOutcomesCourses(args: Parameters<typeof list_linked_outcomes_courses>[2]) {
  return list_linked_outcomes_courses(this.token, this.domain, args);
}

  createLinkOutcomeGlobal(args: Parameters<typeof create_link_outcome_global>[2]) {
  return create_link_outcome_global(this.token, this.domain, args);
}

  createLinkOutcomeGlobalOutcomeId(args: Parameters<typeof create_link_outcome_global_outcome_id>[2]) {
  return create_link_outcome_global_outcome_id(this.token, this.domain, args);
}

  createLinkOutcomeAccounts(args: Parameters<typeof create_link_outcome_accounts>[2]) {
  return create_link_outcome_accounts(this.token, this.domain, args);
}

  createLinkOutcomeAccountsOutcomeId(args: Parameters<typeof create_link_outcome_accounts_outcome_id>[2]) {
  return create_link_outcome_accounts_outcome_id(this.token, this.domain, args);
}

  createLinkOutcomeCourses(args: Parameters<typeof create_link_outcome_courses>[2]) {
  return create_link_outcome_courses(this.token, this.domain, args);
}

  createLinkOutcomeCoursesOutcomeId(args: Parameters<typeof create_link_outcome_courses_outcome_id>[2]) {
  return create_link_outcome_courses_outcome_id(this.token, this.domain, args);
}

  unlinkOutcomeGlobal(args: Parameters<typeof unlink_outcome_global>[2]) {
  return unlink_outcome_global(this.token, this.domain, args);
}

  unlinkOutcomeAccounts(args: Parameters<typeof unlink_outcome_accounts>[2]) {
  return unlink_outcome_accounts(this.token, this.domain, args);
}

  unlinkOutcomeCourses(args: Parameters<typeof unlink_outcome_courses>[2]) {
  return unlink_outcome_courses(this.token, this.domain, args);
}

  listSubgroupsGlobal(args: Parameters<typeof list_subgroups_global>[2]) {
  return list_subgroups_global(this.token, this.domain, args);
}

  listSubgroupsAccounts(args: Parameters<typeof list_subgroups_accounts>[2]) {
  return list_subgroups_accounts(this.token, this.domain, args);
}

  listSubgroupsCourses(args: Parameters<typeof list_subgroups_courses>[2]) {
  return list_subgroups_courses(this.token, this.domain, args);
}

  createSubgroupGlobal(args: Parameters<typeof create_subgroup_global>[2]) {
  return create_subgroup_global(this.token, this.domain, args);
}

  createSubgroupAccounts(args: Parameters<typeof create_subgroup_accounts>[2]) {
  return create_subgroup_accounts(this.token, this.domain, args);
}

  createSubgroupCourses(args: Parameters<typeof create_subgroup_courses>[2]) {
  return create_subgroup_courses(this.token, this.domain, args);
}

  importOutcomeGroupGlobal(args: Parameters<typeof import_outcome_group_global>[2]) {
  return import_outcome_group_global(this.token, this.domain, args);
}

  importOutcomeGroupAccounts(args: Parameters<typeof import_outcome_group_accounts>[2]) {
  return import_outcome_group_accounts(this.token, this.domain, args);
}

  importOutcomeGroupCourses(args: Parameters<typeof import_outcome_group_courses>[2]) {
  return import_outcome_group_courses(this.token, this.domain, args);
}

  importOutcomesAccounts(args: Parameters<typeof import_outcomes_accounts>[2]) {
  return import_outcomes_accounts(this.token, this.domain, args);
}

  importOutcomesCourses(args: Parameters<typeof import_outcomes_courses>[2]) {
  return import_outcomes_courses(this.token, this.domain, args);
}

  getOutcomeImportStatusAccounts(args: Parameters<typeof get_outcome_import_status_accounts>[2]) {
  return get_outcome_import_status_accounts(this.token, this.domain, args);
}

  getOutcomeImportStatusCourses(args: Parameters<typeof get_outcome_import_status_courses>[2]) {
  return get_outcome_import_status_courses(this.token, this.domain, args);
}

  getIdsOfOutcomeGroupsCreatedAfterSuccessfulImportAccounts(args: Parameters<typeof get_ids_of_outcome_groups_created_after_successful_import_accounts>[2]) {
  return get_ids_of_outcome_groups_created_after_successful_import_accounts(this.token, this.domain, args);
}

  getIdsOfOutcomeGroupsCreatedAfterSuccessfulImportCourses(args: Parameters<typeof get_ids_of_outcome_groups_created_after_successful_import_courses>[2]) {
  return get_ids_of_outcome_groups_created_after_successful_import_courses(this.token, this.domain, args);
}

  getOutcomeResults(args: Parameters<typeof get_outcome_results>[2]) {
  return get_outcome_results(this.token, this.domain, args);
}

  setOutcomeOrderingForLmgb(args: Parameters<typeof set_outcome_ordering_for_lmgb>[2]) {
  return set_outcome_ordering_for_lmgb(this.token, this.domain, args);
}

  getOutcomeResultRollups(args: Parameters<typeof get_outcome_result_rollups>[2]) {
  return get_outcome_result_rollups(this.token, this.domain, args);
}

  showOutcome(args: Parameters<typeof show_outcome>[2]) {
  return show_outcome(this.token, this.domain, args);
}

  updateOutcome(args: Parameters<typeof update_outcome>[2]) {
  return update_outcome(this.token, this.domain, args);
}

  getAlignedAssignmentsForOutcomeInCourseForParticularStudent(args: Parameters<typeof get_aligned_assignments_for_outcome_in_course_for_particular_student>[2]) {
  return get_aligned_assignments_for_outcome_in_course_for_particular_student(this.token, this.domain, args);
}

  showFrontPageCourses(args: Parameters<typeof show_front_page_courses>[2]) {
  return show_front_page_courses(this.token, this.domain, args);
}

  showFrontPageGroups(args: Parameters<typeof show_front_page_groups>[2]) {
  return show_front_page_groups(this.token, this.domain, args);
}

  duplicatePage(args: Parameters<typeof duplicate_page>[2]) {
  return duplicate_page(this.token, this.domain, args);
}

  updateCreateFrontPageCourses(args: Parameters<typeof update_create_front_page_courses>[2]) {
  return update_create_front_page_courses(this.token, this.domain, args);
}

  updateCreateFrontPageGroups(args: Parameters<typeof update_create_front_page_groups>[2]) {
  return update_create_front_page_groups(this.token, this.domain, args);
}

  listPagesCourses(args: Parameters<typeof list_pages_courses>[2]) {
  return list_pages_courses(this.token, this.domain, args);
}

  listPagesGroups(args: Parameters<typeof list_pages_groups>[2]) {
  return list_pages_groups(this.token, this.domain, args);
}

  createPageCourses(args: Parameters<typeof create_page_courses>[2]) {
  return create_page_courses(this.token, this.domain, args);
}

  createPageGroups(args: Parameters<typeof create_page_groups>[2]) {
  return create_page_groups(this.token, this.domain, args);
}

  showPageCourses(args: Parameters<typeof show_page_courses>[2]) {
  return show_page_courses(this.token, this.domain, args);
}

  showPageGroups(args: Parameters<typeof show_page_groups>[2]) {
  return show_page_groups(this.token, this.domain, args);
}

  updateCreatePageCourses(args: Parameters<typeof update_create_page_courses>[2]) {
  return update_create_page_courses(this.token, this.domain, args);
}

  updateCreatePageGroups(args: Parameters<typeof update_create_page_groups>[2]) {
  return update_create_page_groups(this.token, this.domain, args);
}

  deletePageCourses(args: Parameters<typeof delete_page_courses>[2]) {
  return delete_page_courses(this.token, this.domain, args);
}

  deletePageGroups(args: Parameters<typeof delete_page_groups>[2]) {
  return delete_page_groups(this.token, this.domain, args);
}

  listRevisionsCourses(args: Parameters<typeof list_revisions_courses>[2]) {
  return list_revisions_courses(this.token, this.domain, args);
}

  listRevisionsGroups(args: Parameters<typeof list_revisions_groups>[2]) {
  return list_revisions_groups(this.token, this.domain, args);
}

  showRevisionCoursesLatest(args: Parameters<typeof show_revision_courses_latest>[2]) {
  return show_revision_courses_latest(this.token, this.domain, args);
}

  showRevisionGroupsLatest(args: Parameters<typeof show_revision_groups_latest>[2]) {
  return show_revision_groups_latest(this.token, this.domain, args);
}

  showRevisionCoursesRevisionId(args: Parameters<typeof show_revision_courses_revision_id>[2]) {
  return show_revision_courses_revision_id(this.token, this.domain, args);
}

  showRevisionGroupsRevisionId(args: Parameters<typeof show_revision_groups_revision_id>[2]) {
  return show_revision_groups_revision_id(this.token, this.domain, args);
}

  revertToRevisionCourses(args: Parameters<typeof revert_to_revision_courses>[2]) {
  return revert_to_revision_courses(this.token, this.domain, args);
}

  revertToRevisionGroups(args: Parameters<typeof revert_to_revision_groups>[2]) {
  return revert_to_revision_groups(this.token, this.domain, args);
}

  getAllPeerReviewsCoursesPeerReviews(args: Parameters<typeof get_all_peer_reviews_courses_peer_reviews>[2]) {
  return get_all_peer_reviews_courses_peer_reviews(this.token, this.domain, args);
}

  getAllPeerReviewsSectionsPeerReviews(args: Parameters<typeof get_all_peer_reviews_sections_peer_reviews>[2]) {
  return get_all_peer_reviews_sections_peer_reviews(this.token, this.domain, args);
}

  getAllPeerReviewsCoursesSubmissions(args: Parameters<typeof get_all_peer_reviews_courses_submissions>[2]) {
  return get_all_peer_reviews_courses_submissions(this.token, this.domain, args);
}

  getAllPeerReviewsSectionsSubmissions(args: Parameters<typeof get_all_peer_reviews_sections_submissions>[2]) {
  return get_all_peer_reviews_sections_submissions(this.token, this.domain, args);
}

  createPeerReviewCourses(args: Parameters<typeof create_peer_review_courses>[2]) {
  return create_peer_review_courses(this.token, this.domain, args);
}

  createPeerReviewSections(args: Parameters<typeof create_peer_review_sections>[2]) {
  return create_peer_review_sections(this.token, this.domain, args);
}

  deletePeerReviewCourses(args: Parameters<typeof delete_peer_review_courses>[2]) {
  return delete_peer_review_courses(this.token, this.domain, args);
}

  deletePeerReviewSections(args: Parameters<typeof delete_peer_review_sections>[2]) {
  return delete_peer_review_sections(this.token, this.domain, args);
}

  getSingleAssignmentLti(args: Parameters<typeof get_single_assignment_lti>[2]) {
  return get_single_assignment_lti(this.token, this.domain, args);
}

  getSingleUserLti(args: Parameters<typeof get_single_user_lti>[2]) {
  return get_single_user_lti(this.token, this.domain, args);
}

  getAllUsersInGroupLti(args: Parameters<typeof get_all_users_in_group_lti>[2]) {
  return get_all_users_in_group_lti(this.token, this.domain, args);
}

  getSingleSubmission(args: Parameters<typeof get_single_submission>[2]) {
  return get_single_submission(this.token, this.domain, args);
}

  getHistoryOfSingleSubmission(args: Parameters<typeof get_history_of_single_submission>[2]) {
  return get_history_of_single_submission(this.token, this.domain, args);
}

  listPlannerItemsPlanner(args: Parameters<typeof list_planner_items_planner>[2]) {
  return list_planner_items_planner(this.token, this.domain, args);
}

  listPlannerItemsUsers(args: Parameters<typeof list_planner_items_users>[2]) {
  return list_planner_items_users(this.token, this.domain, args);
}

  listPlannerNotes(args: Parameters<typeof list_planner_notes>[2]) {
  return list_planner_notes(this.token, this.domain, args);
}

  showPlannerNote(args: Parameters<typeof show_planner_note>[2]) {
  return show_planner_note(this.token, this.domain, args);
}

  updatePlannerNote(args: Parameters<typeof update_planner_note>[2]) {
  return update_planner_note(this.token, this.domain, args);
}

  createPlannerNote(args: Parameters<typeof create_planner_note>[2]) {
  return create_planner_note(this.token, this.domain, args);
}

  deletePlannerNote(args: Parameters<typeof delete_planner_note>[2]) {
  return delete_planner_note(this.token, this.domain, args);
}

  listPlannerOverrides(args: Parameters<typeof list_planner_overrides>[2]) {
  return list_planner_overrides(this.token, this.domain, args);
}

  showPlannerOverride(args: Parameters<typeof show_planner_override>[2]) {
  return show_planner_override(this.token, this.domain, args);
}

  updatePlannerOverride(args: Parameters<typeof update_planner_override>[2]) {
  return update_planner_override(this.token, this.domain, args);
}

  createPlannerOverride(args: Parameters<typeof create_planner_override>[2]) {
  return create_planner_override(this.token, this.domain, args);
}

  deletePlannerOverride(args: Parameters<typeof delete_planner_override>[2]) {
  return delete_planner_override(this.token, this.domain, args);
}

  listPollChoicesInPoll(args: Parameters<typeof list_poll_choices_in_poll>[2]) {
  return list_poll_choices_in_poll(this.token, this.domain, args);
}

  getSinglePollChoice(args: Parameters<typeof get_single_poll_choice>[2]) {
  return get_single_poll_choice(this.token, this.domain, args);
}

  createSinglePollChoice(args: Parameters<typeof create_single_poll_choice>[2]) {
  return create_single_poll_choice(this.token, this.domain, args);
}

  updateSinglePollChoice(args: Parameters<typeof update_single_poll_choice>[2]) {
  return update_single_poll_choice(this.token, this.domain, args);
}

  deletePollChoice(args: Parameters<typeof delete_poll_choice>[2]) {
  return delete_poll_choice(this.token, this.domain, args);
}

  listPollSessionsForPoll(args: Parameters<typeof list_poll_sessions_for_poll>[2]) {
  return list_poll_sessions_for_poll(this.token, this.domain, args);
}

  getResultsForSinglePollSession(args: Parameters<typeof get_results_for_single_poll_session>[2]) {
  return get_results_for_single_poll_session(this.token, this.domain, args);
}

  createSinglePollSession(args: Parameters<typeof create_single_poll_session>[2]) {
  return create_single_poll_session(this.token, this.domain, args);
}

  updateSinglePollSession(args: Parameters<typeof update_single_poll_session>[2]) {
  return update_single_poll_session(this.token, this.domain, args);
}

  deletePollSession(args: Parameters<typeof delete_poll_session>[2]) {
  return delete_poll_session(this.token, this.domain, args);
}

  openPollSession(args: Parameters<typeof open_poll_session>[2]) {
  return open_poll_session(this.token, this.domain, args);
}

  closeOpenedPollSession(args: Parameters<typeof close_opened_poll_session>[2]) {
  return close_opened_poll_session(this.token, this.domain, args);
}

  listOpenedPollSessions(args: Parameters<typeof list_opened_poll_sessions>[2]) {
  return list_opened_poll_sessions(this.token, this.domain, args);
}

  listClosedPollSessions(args: Parameters<typeof list_closed_poll_sessions>[2]) {
  return list_closed_poll_sessions(this.token, this.domain, args);
}

  getSinglePollSubmission(args: Parameters<typeof get_single_poll_submission>[2]) {
  return get_single_poll_submission(this.token, this.domain, args);
}

  createSinglePollSubmission(args: Parameters<typeof create_single_poll_submission>[2]) {
  return create_single_poll_submission(this.token, this.domain, args);
}

  listPolls(args: Parameters<typeof list_polls>[2]) {
  return list_polls(this.token, this.domain, args);
}

  getSinglePoll(args: Parameters<typeof get_single_poll>[2]) {
  return get_single_poll(this.token, this.domain, args);
}

  createSinglePoll(args: Parameters<typeof create_single_poll>[2]) {
  return create_single_poll(this.token, this.domain, args);
}

  updateSinglePoll(args: Parameters<typeof update_single_poll>[2]) {
  return update_single_poll(this.token, this.domain, args);
}

  deletePoll(args: Parameters<typeof delete_poll>[2]) {
  return delete_poll(this.token, this.domain, args);
}

  createUpdateProficiencyRatingsAccounts(args: Parameters<typeof create_update_proficiency_ratings_accounts>[2]) {
  return create_update_proficiency_ratings_accounts(this.token, this.domain, args);
}

  createUpdateProficiencyRatingsCourses(args: Parameters<typeof create_update_proficiency_ratings_courses>[2]) {
  return create_update_proficiency_ratings_courses(this.token, this.domain, args);
}

  getProficiencyRatingsAccounts(args: Parameters<typeof get_proficiency_ratings_accounts>[2]) {
  return get_proficiency_ratings_accounts(this.token, this.domain, args);
}

  getProficiencyRatingsCourses(args: Parameters<typeof get_proficiency_ratings_courses>[2]) {
  return get_proficiency_ratings_courses(this.token, this.domain, args);
}

  queryProgress(args: Parameters<typeof query_progress>[2]) {
  return query_progress(this.token, this.domain, args);
}

  cancelProgress(args: Parameters<typeof cancel_progress>[2]) {
  return cancel_progress(this.token, this.domain, args);
}

  updatePublicJwk(args: Parameters<typeof update_public_jwk>[2]) {
  return update_public_jwk(this.token, this.domain, args);
}

  retrieveAssignmentOverriddenDatesForClassicQuizzes(args: Parameters<typeof retrieve_assignment_overridden_dates_for_classic_quizzes>[2]) {
  return retrieve_assignment_overridden_dates_for_classic_quizzes(this.token, this.domain, args);
}

  retrieveAssignmentOverriddenDatesForNewQuizzes(args: Parameters<typeof retrieve_assignment_overridden_dates_for_new_quizzes>[2]) {
  return retrieve_assignment_overridden_dates_for_new_quizzes(this.token, this.domain, args);
}

  getAvailableQuizIpFilters(args: Parameters<typeof get_available_quiz_ip_filters>[2]) {
  return get_available_quiz_ip_filters(this.token, this.domain, args);
}

  getSingleQuizGroup(args: Parameters<typeof get_single_quiz_group>[2]) {
  return get_single_quiz_group(this.token, this.domain, args);
}

  createQuestionGroup(args: Parameters<typeof create_question_group>[2]) {
  return create_question_group(this.token, this.domain, args);
}

  updateQuestionGroup(args: Parameters<typeof update_question_group>[2]) {
  return update_question_group(this.token, this.domain, args);
}

  deleteQuestionGroup(args: Parameters<typeof delete_question_group>[2]) {
  return delete_question_group(this.token, this.domain, args);
}

  reorderQuestionGroups(args: Parameters<typeof reorder_question_groups>[2]) {
  return reorder_question_groups(this.token, this.domain, args);
}

  listQuestionsInQuizOrSubmission(args: Parameters<typeof list_questions_in_quiz_or_submission>[2]) {
  return list_questions_in_quiz_or_submission(this.token, this.domain, args);
}

  getSingleQuizQuestion(args: Parameters<typeof get_single_quiz_question>[2]) {
  return get_single_quiz_question(this.token, this.domain, args);
}

  createSingleQuizQuestion(args: Parameters<typeof create_single_quiz_question>[2]) {
  return create_single_quiz_question(this.token, this.domain, args);
}

  updateExistingQuizQuestion(args: Parameters<typeof update_existing_quiz_question>[2]) {
  return update_existing_quiz_question(this.token, this.domain, args);
}

  deleteQuizQuestion(args: Parameters<typeof delete_quiz_question>[2]) {
  return delete_quiz_question(this.token, this.domain, args);
}

  retrieveAllQuizReports(args: Parameters<typeof retrieve_all_quiz_reports>[2]) {
  return retrieve_all_quiz_reports(this.token, this.domain, args);
}

  getQuizReport(args: Parameters<typeof get_quiz_report>[2]) {
  return get_quiz_report(this.token, this.domain, args);
}

  abortGenerationOfReportOrRemovePreviouslyGeneratedOne(args: Parameters<typeof abort_generation_of_report_or_remove_previously_generated_one>[2]) {
  return abort_generation_of_report_or_remove_previously_generated_one(this.token, this.domain, args);
}

  fetchingLatestQuizStatistics(args: Parameters<typeof fetching_latest_quiz_statistics>[2]) {
  return fetching_latest_quiz_statistics(this.token, this.domain, args);
}

  submitCapturedEvents(args: Parameters<typeof submit_captured_events>[2]) {
  return submit_captured_events(this.token, this.domain, args);
}

  retrieveCapturedEvents(args: Parameters<typeof retrieve_captured_events>[2]) {
  return retrieve_captured_events(this.token, this.domain, args);
}

  getAllQuizSubmissionQuestions(args: Parameters<typeof get_all_quiz_submission_questions>[2]) {
  return get_all_quiz_submission_questions(this.token, this.domain, args);
}

  answeringQuestions(args: Parameters<typeof answering_questions>[2]) {
  return answering_questions(this.token, this.domain, args);
}

  getFormattedStudentNumericalAnswer(args: Parameters<typeof get_formatted_student_numerical_answer>[2]) {
  return get_formatted_student_numerical_answer(this.token, this.domain, args);
}

  flaggingQuestion(args: Parameters<typeof flagging_question>[2]) {
  return flagging_question(this.token, this.domain, args);
}

  unflaggingQuestion(args: Parameters<typeof unflagging_question>[2]) {
  return unflagging_question(this.token, this.domain, args);
}

  sendMessageToUnsubmittedOrSubmittedUsersForQuiz(args: Parameters<typeof send_message_to_unsubmitted_or_submitted_users_for_quiz>[2]) {
  return send_message_to_unsubmitted_or_submitted_users_for_quiz(this.token, this.domain, args);
}

  getAllQuizSubmissions(args: Parameters<typeof get_all_quiz_submissions>[2]) {
  return get_all_quiz_submissions(this.token, this.domain, args);
}

  getQuizSubmission(args: Parameters<typeof get_quiz_submission>[2]) {
  return get_quiz_submission(this.token, this.domain, args);
}

  getSingleQuizSubmission(args: Parameters<typeof get_single_quiz_submission>[2]) {
  return get_single_quiz_submission(this.token, this.domain, args);
}

  createQuizSubmissionStartQuizTakingSession(args: Parameters<typeof create_quiz_submission_start_quiz_taking_session>[2]) {
  return create_quiz_submission_start_quiz_taking_session(this.token, this.domain, args);
}

  updateStudentQuestionScoresAndComments(args: Parameters<typeof update_student_question_scores_and_comments>[2]) {
  return update_student_question_scores_and_comments(this.token, this.domain, args);
}

  completeQuizSubmissionTurnItIn(args: Parameters<typeof complete_quiz_submission_turn_it_in>[2]) {
  return complete_quiz_submission_turn_it_in(this.token, this.domain, args);
}

  getCurrentQuizSubmissionTimes(args: Parameters<typeof get_current_quiz_submission_times>[2]) {
  return get_current_quiz_submission_times(this.token, this.domain, args);
}

  listQuizzesInCourse(args: Parameters<typeof list_quizzes_in_course>[2]) {
  return list_quizzes_in_course(this.token, this.domain, args);
}

  getSingleQuiz(args: Parameters<typeof get_single_quiz>[2]) {
  return get_single_quiz(this.token, this.domain, args);
}

  createQuiz(args: Parameters<typeof create_quiz>[2]) {
  return create_quiz(this.token, this.domain, args);
}

  editQuiz(args: Parameters<typeof edit_quiz>[2]) {
  return edit_quiz(this.token, this.domain, args);
}

  deleteQuiz(args: Parameters<typeof delete_quiz>[2]) {
  return delete_quiz(this.token, this.domain, args);
}

  reorderQuizItems(args: Parameters<typeof reorder_quiz_items>[2]) {
  return reorder_quiz_items(this.token, this.domain, args);
}

  validateQuizAccessCode(args: Parameters<typeof validate_quiz_access_code>[2]) {
  return validate_quiz_access_code(this.token, this.domain, args);
}

  showCollectionOfResults(args: Parameters<typeof show_collection_of_results>[2]) {
  return show_collection_of_results(this.token, this.domain, args);
}

  showResult(args: Parameters<typeof show_result>[2]) {
  return show_result(this.token, this.domain, args);
}

  listRoles(args: Parameters<typeof list_roles>[2]) {
  return list_roles(this.token, this.domain, args);
}

  getSingleRole(args: Parameters<typeof get_single_role>[2]) {
  return get_single_role(this.token, this.domain, args);
}

  createNewRole(args: Parameters<typeof create_new_role>[2]) {
  return create_new_role(this.token, this.domain, args);
}

  deactivateRole(args: Parameters<typeof deactivate_role>[2]) {
  return deactivate_role(this.token, this.domain, args);
}

  activateRole(args: Parameters<typeof activate_role>[2]) {
  return activate_role(this.token, this.domain, args);
}

  updateRole(args: Parameters<typeof update_role>[2]) {
  return update_role(this.token, this.domain, args);
}

  createSingleRubric(args: Parameters<typeof create_single_rubric>[2]) {
  return create_single_rubric(this.token, this.domain, args);
}

  updateSingleRubric(args: Parameters<typeof update_single_rubric>[2]) {
  return update_single_rubric(this.token, this.domain, args);
}

  deleteSingle(args: Parameters<typeof delete_single>[2]) {
  return delete_single(this.token, this.domain, args);
}

  listRubricsAccounts(args: Parameters<typeof list_rubrics_accounts>[2]) {
  return list_rubrics_accounts(this.token, this.domain, args);
}

  listRubricsCourses(args: Parameters<typeof list_rubrics_courses>[2]) {
  return list_rubrics_courses(this.token, this.domain, args);
}

  getSingleRubricAccounts(args: Parameters<typeof get_single_rubric_accounts>[2]) {
  return get_single_rubric_accounts(this.token, this.domain, args);
}

  getSingleRubricCourses(args: Parameters<typeof get_single_rubric_courses>[2]) {
  return get_single_rubric_courses(this.token, this.domain, args);
}

  getCoursesAndAssignmentsForCourses(args: Parameters<typeof get_courses_and_assignments_for_courses>[2]) {
  return get_courses_and_assignments_for_courses(this.token, this.domain, args);
}

  getCoursesAndAssignmentsForAccounts(args: Parameters<typeof get_courses_and_assignments_for_accounts>[2]) {
  return get_courses_and_assignments_for_accounts(this.token, this.domain, args);
}

  createsRubricUsingCsvFileCourses(args: Parameters<typeof creates_rubric_using_csv_file_courses>[2]) {
  return creates_rubric_using_csv_file_courses(this.token, this.domain, args);
}

  createsRubricUsingCsvFileAccounts(args: Parameters<typeof creates_rubric_using_csv_file_accounts>[2]) {
  return creates_rubric_using_csv_file_accounts(this.token, this.domain, args);
}

  templatedFileForImportingRubric(args: Parameters<typeof templated_file_for_importing_rubric>[2]) {
  return templated_file_for_importing_rubric(this.token, this.domain, args);
}

  getStatusOfRubricImportCourses(args: Parameters<typeof get_status_of_rubric_import_courses>[2]) {
  return get_status_of_rubric_import_courses(this.token, this.domain, args);
}

  getStatusOfRubricImportAccounts(args: Parameters<typeof get_status_of_rubric_import_accounts>[2]) {
  return get_status_of_rubric_import_accounts(this.token, this.domain, args);
}

  createSingleRubricAssessment(args: Parameters<typeof create_single_rubric_assessment>[2]) {
  return create_single_rubric_assessment(this.token, this.domain, args);
}

  updateSingleRubricAssessment(args: Parameters<typeof update_single_rubric_assessment>[2]) {
  return update_single_rubric_assessment(this.token, this.domain, args);
}

  deleteSingleRubricAssessment(args: Parameters<typeof delete_single_rubric_assessment>[2]) {
  return delete_single_rubric_assessment(this.token, this.domain, args);
}

  createRubricassociation(args: Parameters<typeof create_rubricassociation>[2]) {
  return create_rubricassociation(this.token, this.domain, args);
}

  updateRubricassociation(args: Parameters<typeof update_rubricassociation>[2]) {
  return update_rubricassociation(this.token, this.domain, args);
}

  deleteRubricassociation(args: Parameters<typeof delete_rubricassociation>[2]) {
  return delete_rubricassociation(this.token, this.domain, args);
}

  downloadUuidMappingForThisSandbox(args: Parameters<typeof download_uuid_mapping_for_this_sandbox>[2]) {
  return download_uuid_mapping_for_this_sandbox(this.token, this.domain, args);
}

  createScore(args: Parameters<typeof create_score>[2]) {
  return create_score(this.token, this.domain, args);
}

  findRecipientsConversations(args: Parameters<typeof find_recipients_conversations>[2]) {
  return find_recipients_conversations(this.token, this.domain, args);
}

  findRecipientsSearch(args: Parameters<typeof find_recipients_search>[2]) {
  return find_recipients_search(this.token, this.domain, args);
}

  listAllCourses(args: Parameters<typeof list_all_courses>[2]) {
  return list_all_courses(this.token, this.domain, args);
}

  listCourseSections(args: Parameters<typeof list_course_sections>[2]) {
  return list_course_sections(this.token, this.domain, args);
}

  createCourseSection(args: Parameters<typeof create_course_section>[2]) {
  return create_course_section(this.token, this.domain, args);
}

  crossListSection(args: Parameters<typeof cross_list_section>[2]) {
  return cross_list_section(this.token, this.domain, args);
}

  deCrossListSection(args: Parameters<typeof de_cross_list_section>[2]) {
  return de_cross_list_section(this.token, this.domain, args);
}

  editSection(args: Parameters<typeof edit_section>[2]) {
  return edit_section(this.token, this.domain, args);
}

  getSectionInformationCourses(args: Parameters<typeof get_section_information_courses>[2]) {
  return get_section_information_courses(this.token, this.domain, args);
}

  getSectionInformationSections(args: Parameters<typeof get_section_information_sections>[2]) {
  return get_section_information_sections(this.token, this.domain, args);
}

  deleteSection(args: Parameters<typeof delete_section>[2]) {
  return delete_section(this.token, this.domain, args);
}

  getKalturaConfig(args: Parameters<typeof get_kaltura_config>[2]) {
  return get_kaltura_config(this.token, this.domain, args);
}

  startKalturaSession(args: Parameters<typeof start_kaltura_session>[2]) {
  return start_kaltura_session(this.token, this.domain, args);
}

  shareBrandconfigTheme(args: Parameters<typeof share_brandconfig_theme>[2]) {
  return share_brandconfig_theme(this.token, this.domain, args);
}

  updateSharedTheme(args: Parameters<typeof update_shared_theme>[2]) {
  return update_shared_theme(this.token, this.domain, args);
}

  unShareBrandconfigTheme(args: Parameters<typeof un_share_brandconfig_theme>[2]) {
  return un_share_brandconfig_theme(this.token, this.domain, args);
}

  getSisImportErrorListSisImports(args: Parameters<typeof get_sis_import_error_list_sis_imports>[2]) {
  return get_sis_import_error_list_sis_imports(this.token, this.domain, args);
}

  getSisImportErrorListSisImportErrors(args: Parameters<typeof get_sis_import_error_list_sis_import_errors>[2]) {
  return get_sis_import_error_list_sis_import_errors(this.token, this.domain, args);
}

  getSisImportList(args: Parameters<typeof get_sis_import_list>[2]) {
  return get_sis_import_list(this.token, this.domain, args);
}

  getCurrentImportingSisImport(args: Parameters<typeof get_current_importing_sis_import>[2]) {
  return get_current_importing_sis_import(this.token, this.domain, args);
}

  importSisData(args: Parameters<typeof import_sis_data>[2]) {
  return import_sis_data(this.token, this.domain, args);
}

  getSisImportStatus(args: Parameters<typeof get_sis_import_status>[2]) {
  return get_sis_import_status(this.token, this.domain, args);
}

  restoreWorkflowStatesOfSisImportedItems(args: Parameters<typeof restore_workflow_states_of_sis_imported_items>[2]) {
  return restore_workflow_states_of_sis_imported_items(this.token, this.domain, args);
}

  abortSisImport(args: Parameters<typeof abort_sis_import>[2]) {
  return abort_sis_import(this.token, this.domain, args);
}

  abortAllPendingSisImports(args: Parameters<typeof abort_all_pending_sis_imports>[2]) {
  return abort_all_pending_sis_imports(this.token, this.domain, args);
}

  retrieveAssignmentsEnabledForGradeExportToSisAccounts(args: Parameters<typeof retrieve_assignments_enabled_for_grade_export_to_sis_accounts>[2]) {
  return retrieve_assignments_enabled_for_grade_export_to_sis_accounts(this.token, this.domain, args);
}

  retrieveAssignmentsEnabledForGradeExportToSisCourses(args: Parameters<typeof retrieve_assignments_enabled_for_grade_export_to_sis_courses>[2]) {
  return retrieve_assignments_enabled_for_grade_export_to_sis_courses(this.token, this.domain, args);
}

  disableAssignmentsCurrentlyEnabledForGradeExportToSis(args: Parameters<typeof disable_assignments_currently_enabled_for_grade_export_to_sis>[2]) {
  return disable_assignments_currently_enabled_for_grade_export_to_sis(this.token, this.domain, args);
}

  searchCourseContent(args: Parameters<typeof search_course_content>[2]) {
  return search_course_content(this.token, this.domain, args);
}

  editSubmissionComment(args: Parameters<typeof edit_submission_comment>[2]) {
  return edit_submission_comment(this.token, this.domain, args);
}

  deleteSubmissionComment(args: Parameters<typeof delete_submission_comment>[2]) {
  return delete_submission_comment(this.token, this.domain, args);
}

  submitAssignmentCourses(args: Parameters<typeof submit_assignment_courses>[2]) {
  return submit_assignment_courses(this.token, this.domain, args);
}

  submitAssignmentSections(args: Parameters<typeof submit_assignment_sections>[2]) {
  return submit_assignment_sections(this.token, this.domain, args);
}

  listAssignmentSubmissionsCourses(args: Parameters<typeof list_assignment_submissions_courses>[2]) {
  return list_assignment_submissions_courses(this.token, this.domain, args);
}

  listAssignmentSubmissionsSections(args: Parameters<typeof list_assignment_submissions_sections>[2]) {
  return list_assignment_submissions_sections(this.token, this.domain, args);
}

  listSubmissionsForMultipleAssignmentsCourses(args: Parameters<typeof list_submissions_for_multiple_assignments_courses>[2]) {
  return list_submissions_for_multiple_assignments_courses(this.token, this.domain, args);
}

  listSubmissionsForMultipleAssignmentsSections(args: Parameters<typeof list_submissions_for_multiple_assignments_sections>[2]) {
  return list_submissions_for_multiple_assignments_sections(this.token, this.domain, args);
}

  getSingleSubmissionCourses(args: Parameters<typeof get_single_submission_courses>[2]) {
  return get_single_submission_courses(this.token, this.domain, args);
}

  getSingleSubmissionSections(args: Parameters<typeof get_single_submission_sections>[2]) {
  return get_single_submission_sections(this.token, this.domain, args);
}

  getSingleSubmissionByAnonymousIdCourses(args: Parameters<typeof get_single_submission_by_anonymous_id_courses>[2]) {
  return get_single_submission_by_anonymous_id_courses(this.token, this.domain, args);
}

  getSingleSubmissionByAnonymousIdSections(args: Parameters<typeof get_single_submission_by_anonymous_id_sections>[2]) {
  return get_single_submission_by_anonymous_id_sections(this.token, this.domain, args);
}

  uploadFileCourses(args: Parameters<typeof upload_file_courses>[2]) {
  return upload_file_courses(this.token, this.domain, args);
}

  uploadFileSections(args: Parameters<typeof upload_file_sections>[2]) {
  return upload_file_sections(this.token, this.domain, args);
}

  gradeOrCommentOnSubmissionCourses(args: Parameters<typeof grade_or_comment_on_submission_courses>[2]) {
  return grade_or_comment_on_submission_courses(this.token, this.domain, args);
}

  gradeOrCommentOnSubmissionSections(args: Parameters<typeof grade_or_comment_on_submission_sections>[2]) {
  return grade_or_comment_on_submission_sections(this.token, this.domain, args);
}

  gradeOrCommentOnSubmissionByAnonymousIdCourses(args: Parameters<typeof grade_or_comment_on_submission_by_anonymous_id_courses>[2]) {
  return grade_or_comment_on_submission_by_anonymous_id_courses(this.token, this.domain, args);
}

  gradeOrCommentOnSubmissionByAnonymousIdSections(args: Parameters<typeof grade_or_comment_on_submission_by_anonymous_id_sections>[2]) {
  return grade_or_comment_on_submission_by_anonymous_id_sections(this.token, this.domain, args);
}

  listGradeableStudents(args: Parameters<typeof list_gradeable_students>[2]) {
  return list_gradeable_students(this.token, this.domain, args);
}

  listMultipleAssignmentsGradeableStudents(args: Parameters<typeof list_multiple_assignments_gradeable_students>[2]) {
  return list_multiple_assignments_gradeable_students(this.token, this.domain, args);
}

  gradeOrCommentOnMultipleSubmissionsCoursesSubmissions(args: Parameters<typeof grade_or_comment_on_multiple_submissions_courses_submissions>[2]) {
  return grade_or_comment_on_multiple_submissions_courses_submissions(this.token, this.domain, args);
}

  gradeOrCommentOnMultipleSubmissionsCoursesAssignments(args: Parameters<typeof grade_or_comment_on_multiple_submissions_courses_assignments>[2]) {
  return grade_or_comment_on_multiple_submissions_courses_assignments(this.token, this.domain, args);
}

  gradeOrCommentOnMultipleSubmissionsSectionsSubmissions(args: Parameters<typeof grade_or_comment_on_multiple_submissions_sections_submissions>[2]) {
  return grade_or_comment_on_multiple_submissions_sections_submissions(this.token, this.domain, args);
}

  gradeOrCommentOnMultipleSubmissionsSectionsAssignments(args: Parameters<typeof grade_or_comment_on_multiple_submissions_sections_assignments>[2]) {
  return grade_or_comment_on_multiple_submissions_sections_assignments(this.token, this.domain, args);
}

  markSubmissionAsReadCourses(args: Parameters<typeof mark_submission_as_read_courses>[2]) {
  return mark_submission_as_read_courses(this.token, this.domain, args);
}

  markSubmissionAsReadSections(args: Parameters<typeof mark_submission_as_read_sections>[2]) {
  return mark_submission_as_read_sections(this.token, this.domain, args);
}

  markSubmissionAsUnreadCourses(args: Parameters<typeof mark_submission_as_unread_courses>[2]) {
  return mark_submission_as_unread_courses(this.token, this.domain, args);
}

  markSubmissionAsUnreadSections(args: Parameters<typeof mark_submission_as_unread_sections>[2]) {
  return mark_submission_as_unread_sections(this.token, this.domain, args);
}

  markBulkSubmissionsAsReadCourses(args: Parameters<typeof mark_bulk_submissions_as_read_courses>[2]) {
  return mark_bulk_submissions_as_read_courses(this.token, this.domain, args);
}

  markBulkSubmissionsAsReadSections(args: Parameters<typeof mark_bulk_submissions_as_read_sections>[2]) {
  return mark_bulk_submissions_as_read_sections(this.token, this.domain, args);
}

  markSubmissionItemAsReadCourses(args: Parameters<typeof mark_submission_item_as_read_courses>[2]) {
  return mark_submission_item_as_read_courses(this.token, this.domain, args);
}

  markSubmissionItemAsReadSections(args: Parameters<typeof mark_submission_item_as_read_sections>[2]) {
  return mark_submission_item_as_read_sections(this.token, this.domain, args);
}

  clearUnreadStatusForAllSubmissionsCourses(args: Parameters<typeof clear_unread_status_for_all_submissions_courses>[2]) {
  return clear_unread_status_for_all_submissions_courses(this.token, this.domain, args);
}

  clearUnreadStatusForAllSubmissionsSections(args: Parameters<typeof clear_unread_status_for_all_submissions_sections>[2]) {
  return clear_unread_status_for_all_submissions_sections(this.token, this.domain, args);
}

  getRubricAssessmentsReadStateCoursesRubricComments(args: Parameters<typeof get_rubric_assessments_read_state_courses_rubric_comments>[2]) {
  return get_rubric_assessments_read_state_courses_rubric_comments(this.token, this.domain, args);
}

  getRubricAssessmentsReadStateCoursesRubricAssessments(args: Parameters<typeof get_rubric_assessments_read_state_courses_rubric_assessments>[2]) {
  return get_rubric_assessments_read_state_courses_rubric_assessments(this.token, this.domain, args);
}

  getRubricAssessmentsReadStateSectionsRubricComments(args: Parameters<typeof get_rubric_assessments_read_state_sections_rubric_comments>[2]) {
  return get_rubric_assessments_read_state_sections_rubric_comments(this.token, this.domain, args);
}

  getRubricAssessmentsReadStateSectionsRubricAssessments(args: Parameters<typeof get_rubric_assessments_read_state_sections_rubric_assessments>[2]) {
  return get_rubric_assessments_read_state_sections_rubric_assessments(this.token, this.domain, args);
}

  markRubricAssessmentsAsReadCoursesRubricComments(args: Parameters<typeof mark_rubric_assessments_as_read_courses_rubric_comments>[2]) {
  return mark_rubric_assessments_as_read_courses_rubric_comments(this.token, this.domain, args);
}

  markRubricAssessmentsAsReadCoursesRubricAssessments(args: Parameters<typeof mark_rubric_assessments_as_read_courses_rubric_assessments>[2]) {
  return mark_rubric_assessments_as_read_courses_rubric_assessments(this.token, this.domain, args);
}

  markRubricAssessmentsAsReadSectionsRubricComments(args: Parameters<typeof mark_rubric_assessments_as_read_sections_rubric_comments>[2]) {
  return mark_rubric_assessments_as_read_sections_rubric_comments(this.token, this.domain, args);
}

  markRubricAssessmentsAsReadSectionsRubricAssessments(args: Parameters<typeof mark_rubric_assessments_as_read_sections_rubric_assessments>[2]) {
  return mark_rubric_assessments_as_read_sections_rubric_assessments(this.token, this.domain, args);
}

  getDocumentAnnotationsReadStateCourses(args: Parameters<typeof get_document_annotations_read_state_courses>[2]) {
  return get_document_annotations_read_state_courses(this.token, this.domain, args);
}

  getDocumentAnnotationsReadStateSections(args: Parameters<typeof get_document_annotations_read_state_sections>[2]) {
  return get_document_annotations_read_state_sections(this.token, this.domain, args);
}

  markDocumentAnnotationsAsReadCourses(args: Parameters<typeof mark_document_annotations_as_read_courses>[2]) {
  return mark_document_annotations_as_read_courses(this.token, this.domain, args);
}

  markDocumentAnnotationsAsReadSections(args: Parameters<typeof mark_document_annotations_as_read_sections>[2]) {
  return mark_document_annotations_as_read_sections(this.token, this.domain, args);
}

  submissionSummaryCourses(args: Parameters<typeof submission_summary_courses>[2]) {
  return submission_summary_courses(this.token, this.domain, args);
}

  submissionSummarySections(args: Parameters<typeof submission_summary_sections>[2]) {
  return submission_summary_sections(this.token, this.domain, args);
}

  listAvailableTabsForCourseOrGroupAccounts(args: Parameters<typeof list_available_tabs_for_course_or_group_accounts>[2]) {
  return list_available_tabs_for_course_or_group_accounts(this.token, this.domain, args);
}

  listAvailableTabsForCourseOrGroupCourses(args: Parameters<typeof list_available_tabs_for_course_or_group_courses>[2]) {
  return list_available_tabs_for_course_or_group_courses(this.token, this.domain, args);
}

  listAvailableTabsForCourseOrGroupGroups(args: Parameters<typeof list_available_tabs_for_course_or_group_groups>[2]) {
  return list_available_tabs_for_course_or_group_groups(this.token, this.domain, args);
}

  listAvailableTabsForCourseOrGroupUsers(args: Parameters<typeof list_available_tabs_for_course_or_group_users>[2]) {
  return list_available_tabs_for_course_or_group_users(this.token, this.domain, args);
}

  updateTabForCourse(args: Parameters<typeof update_tab_for_course>[2]) {
  return update_tab_for_course(this.token, this.domain, args);
}

  listTemporaryEnrollmentPairings(args: Parameters<typeof list_temporary_enrollment_pairings>[2]) {
  return list_temporary_enrollment_pairings(this.token, this.domain, args);
}

  getSingleTemporaryEnrollmentPairing(args: Parameters<typeof get_single_temporary_enrollment_pairing>[2]) {
  return get_single_temporary_enrollment_pairing(this.token, this.domain, args);
}

  newTemporaryenrollmentpairing(args: Parameters<typeof new_temporaryenrollmentpairing>[2]) {
  return new_temporaryenrollmentpairing(this.token, this.domain, args);
}

  createTemporaryEnrollmentPairing(args: Parameters<typeof create_temporary_enrollment_pairing>[2]) {
  return create_temporary_enrollment_pairing(this.token, this.domain, args);
}

  deleteTemporaryEnrollmentPairing(args: Parameters<typeof delete_temporary_enrollment_pairing>[2]) {
  return delete_temporary_enrollment_pairing(this.token, this.domain, args);
}

  listObservees(args: Parameters<typeof list_observees>[2]) {
  return list_observees(this.token, this.domain, args);
}

  listObservers(args: Parameters<typeof list_observers>[2]) {
  return list_observers(this.token, this.domain, args);
}

  addObserveeWithCredentials(args: Parameters<typeof add_observee_with_credentials>[2]) {
  return add_observee_with_credentials(this.token, this.domain, args);
}

  showObservee(args: Parameters<typeof show_observee>[2]) {
  return show_observee(this.token, this.domain, args);
}

  showObserver(args: Parameters<typeof show_observer>[2]) {
  return show_observer(this.token, this.domain, args);
}

  addObservee(args: Parameters<typeof add_observee>[2]) {
  return add_observee(this.token, this.domain, args);
}

  removeObservee(args: Parameters<typeof remove_observee>[2]) {
  return remove_observee(this.token, this.domain, args);
}

  createObserverPairingCode(args: Parameters<typeof create_observer_pairing_code>[2]) {
  return create_observer_pairing_code(this.token, this.domain, args);
}

  listUsersInAccount(args: Parameters<typeof list_users_in_account>[2]) {
  return list_users_in_account(this.token, this.domain, args);
}

  listActivityStreamSelf(args: Parameters<typeof list_activity_stream_self>[2]) {
  return list_activity_stream_self(this.token, this.domain, args);
}

  listActivityStreamActivityStream(args: Parameters<typeof list_activity_stream_activity_stream>[2]) {
  return list_activity_stream_activity_stream(this.token, this.domain, args);
}

  activityStreamSummary(args: Parameters<typeof activity_stream_summary>[2]) {
  return activity_stream_summary(this.token, this.domain, args);
}

  listTodoItems(args: Parameters<typeof list_todo_items>[2]) {
  return list_todo_items(this.token, this.domain, args);
}

  listCountsForTodoItems(args: Parameters<typeof list_counts_for_todo_items>[2]) {
  return list_counts_for_todo_items(this.token, this.domain, args);
}

  listUpcomingAssignmentsCalendarEvents(args: Parameters<typeof list_upcoming_assignments_calendar_events>[2]) {
  return list_upcoming_assignments_calendar_events(this.token, this.domain, args);
}

  listMissingSubmissions(args: Parameters<typeof list_missing_submissions>[2]) {
  return list_missing_submissions(this.token, this.domain, args);
}

  hideStreamItem(args: Parameters<typeof hide_stream_item>[2]) {
  return hide_stream_item(this.token, this.domain, args);
}

  hideAllStreamItems(args: Parameters<typeof hide_all_stream_items>[2]) {
  return hide_all_stream_items(this.token, this.domain, args);
}

  showUserDetails(args: Parameters<typeof show_user_details>[2]) {
  return show_user_details(this.token, this.domain, args);
}

  createUser(args: Parameters<typeof create_user>[2]) {
  return create_user(this.token, this.domain, args);
}

  deprecatedSelfRegisterUser(args: Parameters<typeof deprecated_self_register_user>[2]) {
  return deprecated_self_register_user(this.token, this.domain, args);
}

  updateUserSettings(args: Parameters<typeof update_user_settings>[2]) {
  return update_user_settings(this.token, this.domain, args);
}

  getCustomColors(args: Parameters<typeof get_custom_colors>[2]) {
  return get_custom_colors(this.token, this.domain, args);
}

  getCustomColor(args: Parameters<typeof get_custom_color>[2]) {
  return get_custom_color(this.token, this.domain, args);
}

  updateCustomColor(args: Parameters<typeof update_custom_color>[2]) {
  return update_custom_color(this.token, this.domain, args);
}

  updateTextEditorPreference(args: Parameters<typeof update_text_editor_preference>[2]) {
  return update_text_editor_preference(this.token, this.domain, args);
}

  getDashboardPositions(args: Parameters<typeof get_dashboard_positions>[2]) {
  return get_dashboard_positions(this.token, this.domain, args);
}

  updateDashboardPositions(args: Parameters<typeof update_dashboard_positions>[2]) {
  return update_dashboard_positions(this.token, this.domain, args);
}

  editUser(args: Parameters<typeof edit_user>[2]) {
  return edit_user(this.token, this.domain, args);
}

  terminateAllUserSessions(args: Parameters<typeof terminate_all_user_sessions>[2]) {
  return terminate_all_user_sessions(this.token, this.domain, args);
}

  logUsersOutOfAllMobileAppsMobileSessions(args: Parameters<typeof log_users_out_of_all_mobile_apps_mobile_sessions>[2]) {
  return log_users_out_of_all_mobile_apps_mobile_sessions(this.token, this.domain, args);
}

  logUsersOutOfAllMobileAppsId(args: Parameters<typeof log_users_out_of_all_mobile_apps_id>[2]) {
  return log_users_out_of_all_mobile_apps_id(this.token, this.domain, args);
}

  mergeUserIntoAnotherUserDestinationUserId(args: Parameters<typeof merge_user_into_another_user_destination_user_id>[2]) {
  return merge_user_into_another_user_destination_user_id(this.token, this.domain, args);
}

  mergeUserIntoAnotherUserAccounts(args: Parameters<typeof merge_user_into_another_user_accounts>[2]) {
  return merge_user_into_another_user_accounts(this.token, this.domain, args);
}

  splitMergedUsersIntoSeparateUsers(args: Parameters<typeof split_merged_users_into_separate_users>[2]) {
  return split_merged_users_into_separate_users(this.token, this.domain, args);
}

  getPandataEventsJwtTokenAndItsExpirationDate(args: Parameters<typeof get_pandata_events_jwt_token_and_its_expiration_date>[2]) {
  return get_pandata_events_jwt_token_and_its_expiration_date(this.token, this.domain, args);
}

  getUsersMostRecentlyGradedSubmissions(args: Parameters<typeof get_users_most_recently_graded_submissions>[2]) {
  return get_users_most_recently_graded_submissions(this.token, this.domain, args);
}

  getUserProfile(args: Parameters<typeof get_user_profile>[2]) {
  return get_user_profile(this.token, this.domain, args);
}

  listAvatarOptions(args: Parameters<typeof list_avatar_options>[2]) {
  return list_avatar_options(this.token, this.domain, args);
}

  listUserPageViews(args: Parameters<typeof list_user_page_views>[2]) {
  return list_user_page_views(this.token, this.domain, args);
}

  storeCustomData(args: Parameters<typeof store_custom_data>[2]) {
  return store_custom_data(this.token, this.domain, args);
}

  loadCustomData(args: Parameters<typeof load_custom_data>[2]) {
  return load_custom_data(this.token, this.domain, args);
}

  deleteCustomData(args: Parameters<typeof delete_custom_data>[2]) {
  return delete_custom_data(this.token, this.domain, args);
}

  listCourseNicknames(args: Parameters<typeof list_course_nicknames>[2]) {
  return list_course_nicknames(this.token, this.domain, args);
}

  getCourseNickname(args: Parameters<typeof get_course_nickname>[2]) {
  return get_course_nickname(this.token, this.domain, args);
}

  setCourseNickname(args: Parameters<typeof set_course_nickname>[2]) {
  return set_course_nickname(this.token, this.domain, args);
}

  removeCourseNickname(args: Parameters<typeof remove_course_nickname>[2]) {
  return remove_course_nickname(this.token, this.domain, args);
}

  clearCourseNicknames(args: Parameters<typeof clear_course_nicknames>[2]) {
  return clear_course_nicknames(this.token, this.domain, args);
}

  createWebhookSubscription(args: Parameters<typeof create_webhook_subscription>[2]) {
  return create_webhook_subscription(this.token, this.domain, args);
}

  deleteWebhookSubscription(args: Parameters<typeof delete_webhook_subscription>[2]) {
  return delete_webhook_subscription(this.token, this.domain, args);
}

  showSingleWebhookSubscription(args: Parameters<typeof show_single_webhook_subscription>[2]) {
  return show_single_webhook_subscription(this.token, this.domain, args);
}

  updateWebhookSubscription(args: Parameters<typeof update_webhook_subscription>[2]) {
  return update_webhook_subscription(this.token, this.domain, args);
}

  listAllWebhookSubscriptionForToolProxy(args: Parameters<typeof list_all_webhook_subscription_for_tool_proxy>[2]) {
  return list_all_webhook_subscription_for_tool_proxy(this.token, this.domain, args);
}

  updateSubmissionSWhatIfScoreAndCalculateGrades(args: Parameters<typeof update_submission_s_what_if_score_and_calculate_grades>[2]) {
  return update_submission_s_what_if_score_and_calculate_grades(this.token, this.domain, args);
}

  resetWhatIfScoresForCurrentUserForEntireCourseAndRecalculateGrades(args: Parameters<typeof reset_what_if_scores_for_current_user_for_entire_course_and_recalculate_grades>[2]) {
  return reset_what_if_scores_for_current_user_for_entire_course_and_recalculate_grades(this.token, this.domain, args);
}


}
