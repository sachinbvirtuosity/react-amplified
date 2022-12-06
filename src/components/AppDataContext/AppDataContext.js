import React, { useContext, useEffect, useState } from 'react'
import { API, Auth } from "aws-amplify"
import { listAAFPMainSetups, listAAFPHolidayMsgSetups, listAAFPEmergencyMsgSetups } from '../../graphql/queries'

const AppDataContext = React.createContext()

const AppDataProvider = ({children}) => {
    const [departments, setDepartments] = useState()
    const [mainData, setMainData] = useState()
    const [holidayData, setHolidayData] = useState()
    const [emergencyData, setEmergencyData] = useState()

    const [selectedDepartmentPhone, setSelectedDepartmentPhone] = useState('+18008132279')
    const [selectedDepartmentGroupName, setSelectedDepartmentGroupName] = useState('MRC')
    const [loading, setLoading] = useState(false)

    const [formikState, setFormikState] = useState();

    const toggleLoading = () => {
        setLoading(!loading);
    }

    const turnLoadingOn = (value) => {
        setLoading(true)
    }

    const turnLoadingOff = (value) => {
        setLoading(false)
    }

    const useAuthData = (() => {
        const [authUser, setAuthUser] = useState(undefined);
        
        useEffect(() => {
            Auth.currentAuthenticatedUser({
            bypassCache: false,
            })
                .then(user => {
                    setAuthUser(user.attributes.email);
                })
                .catch(err => console.log("Error while authenticated user : ", err));
        }, []);

        return authUser;
    });

    const getDepartments = async () => {
        const departmentResults = await API.graphql({ 
            query: listAAFPMainSetups,
        });
    
        const _departments = departmentResults.data.listAAFPMainSetups.items.map((item) => {
            return {
                dialed_number: item.dialed_number,
                group_name: item.group_name,
            }
        })

        _departments
            ? setDepartments(_departments)
            : setDepartments([]);
    };

    useEffect(() => {
        getDepartments()
    }, [])

    const setSelectedDepartment_Phone = (phone) => {
        setSelectedDepartmentPhone(phone)
    }

    const setSelectedDepartment_GroupName = (groupName) => {
        setSelectedDepartmentGroupName(groupName)
    }

    const getMainData = async () => {
        const mainResults = await API.graphql({ 
            query: listAAFPMainSetups,
            variables: { filter: { dialed_number: { eq: selectedDepartmentPhone } } },
        });
    
        mainResults.data
            ? setMainData(mainResults.data.listAAFPMainSetups.items)
            : setMainData([]);
    };

    useEffect(() => {
        getMainData()
    }, [selectedDepartmentPhone])

    const updateMainData = async (id, updated) => {
        // TODO - move logic here later
    };

    const getHolidayData = async () => {
        try {
            const holidayResult = await API.graphql({
            query: listAAFPHolidayMsgSetups,
            variables: { filter: { group_name: { eq: selectedDepartmentGroupName } } },
            });

            holidayResult.data
            ? setHolidayData(holidayResult.data)
            : setHolidayData([]);
        } catch(error){
            console.log(`Error: ${JSON.stringify(error)}`)
        }
    };

    useEffect(() => {
        getHolidayData()
    }, [selectedDepartmentGroupName])

    const addHolidayDataListItem = async (newHolidayData) => {
        // TODO - move logic here later
    };

    const deleteHolidayDataListItem = async (id) => {
        // TODO - move logic here later
    };

    const getEmergencyData = async () => {
        try {
            const emergencySetupApiResult = await API.graphql({
            query: listAAFPEmergencyMsgSetups,
            variables: { filter: { group_name: { eq: selectedDepartmentGroupName } } },
            });

            emergencySetupApiResult != undefined
                ? setEmergencyData(emergencySetupApiResult.data.listAAFPEmergencyMsgSetups.items[0])
                : setEmergencyData()
        } catch(error){
            console.log(`Error: ${JSON.stringify(error)}`)
        }
    };

    useEffect(() => {
        getEmergencyData()
    }, [selectedDepartmentPhone])

    const updateEmergencyData = async (id, updated) => {
        // TODO
    }


    return <AppDataContext.Provider 
        value={{
            loading,
            turnLoadingOn,
            turnLoadingOff,
            toggleLoading,
            useAuthData,
            departments,
            selectedDepartmentPhone,
            selectedDepartmentGroupName,
            setSelectedDepartment_Phone,
            setSelectedDepartment_GroupName,
            mainData,
            holidayData,
            emergencyData,
            formikState,
            getDepartments,
            getMainData,
            updateMainData,
            getHolidayData,
            addHolidayDataListItem,
            deleteHolidayDataListItem,
            getEmergencyData,
            updateEmergencyData,
            setFormikState
        }}
    >
        { children }
    </AppDataContext.Provider>
}

export const useAppDataContext = () => {
    return useContext(AppDataContext)
}

export { AppDataProvider }