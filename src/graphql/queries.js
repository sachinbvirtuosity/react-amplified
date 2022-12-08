/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAAFPMainSetup = /* GraphQL */ `
  query GetAAFPMainSetup($group_name: String!) {
    getAAFPMainSetup(group_name: $group_name) {
      id
      dialed_number
      group_full_name
      group_name
      main_greeting
      after_hr_msg
      enable_emergency_flg
      no_agents_logged_in_flg
      agents_unstaffed_flg
      enable_callback_flg
      enable_spcl_condtn_flg
      spcl_condtn_msg
      route_call_to_queue
      queue_msg
      extn_num
      play_menu_optns_flg
      menu_optn_msg
      queue_arn
      voice_mail_flg
      last_update_by
      last_update_date
      hours_of_operations_name
      voice_mail_destn_email
      emergency_msg
      createdAt
      updatedAt
    }
  }
`;
export const listAAFPMainSetups = /* GraphQL */ `
  query ListAAFPMainSetups(
    $group_name: String
    $filter: ModelAAFPMainSetupFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAAFPMainSetups(
      group_name: $group_name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        dialed_number
        group_full_name
        group_name
        main_greeting
        after_hr_msg
        enable_emergency_flg
        no_agents_logged_in_flg
        agents_unstaffed_flg
        enable_callback_flg
        enable_spcl_condtn_flg
        spcl_condtn_msg
        route_call_to_queue
        queue_msg
        extn_num
        play_menu_optns_flg
        menu_optn_msg
        queue_arn
        voice_mail_flg
        last_update_by
        last_update_date
        hours_of_operations_name
        voice_mail_destn_email
        emergency_msg
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAAFPHolidayMsgSetup = /* GraphQL */ `
  query GetAAFPHolidayMsgSetup($group_name: String!) {
    getAAFPHolidayMsgSetup(group_name: $group_name) {
      id
      holiday_start_dt
      holiday_end_dt
      holiday_type
      group_name
      holiday_msg
      active_flg
      last_update_by
      last_update_date
      createdAt
      updatedAt
    }
  }
`;
export const listAAFPHolidayMsgSetups = /* GraphQL */ `
  query ListAAFPHolidayMsgSetups(
    $group_name: String
    $filter: ModelAAFPHolidayMsgSetupFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAAFPHolidayMsgSetups(
      group_name: $group_name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        holiday_start_dt
        holiday_end_dt
        holiday_type
        group_name
        holiday_msg
        active_flg
        last_update_by
        last_update_date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
