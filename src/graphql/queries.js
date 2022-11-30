/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAAFPMainSetup = /* GraphQL */ `
  query GetAAFPMainSetup($dialed_number: String!) {
    getAAFPMainSetup(dialed_number: $dialed_number) {
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
      createdAt
      updatedAt
    }
  }
`;
export const listAAFPMainSetups = /* GraphQL */ `
  query ListAAFPMainSetups(
    $dialed_number: String
    $filter: ModelAAFPMainSetupFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAAFPMainSetups(
      dialed_number: $dialed_number
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAAFPEmergencyMsgSetup = /* GraphQL */ `
  query GetAAFPEmergencyMsgSetup($id: AWSDateTime!) {
    getAAFPEmergencyMsgSetup(id: $id) {
      id
      group_name
      emergency_msg
      active_flg
      last_update_by
      last_update_date
      createdAt
      updatedAt
    }
  }
`;
export const listAAFPEmergencyMsgSetups = /* GraphQL */ `
  query ListAAFPEmergencyMsgSetups(
    $id: AWSDateTime
    $filter: ModelAAFPEmergencyMsgSetupFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAAFPEmergencyMsgSetups(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        group_name
        emergency_msg
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
export const getAAFPHolidayMsgSetup = /* GraphQL */ `
  query GetAAFPHolidayMsgSetup($id: AWSDateTime!) {
    getAAFPHolidayMsgSetup(id: $id) {
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
    $id: AWSDateTime
    $filter: ModelAAFPHolidayMsgSetupFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAAFPHolidayMsgSetups(
      id: $id
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
