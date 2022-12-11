import React, { useContext, useEffect, useState } from 'react'
import { API, Auth } from "aws-amplify"
import { listAAFPMainSetups, listAAFPHolidayMsgSetups } from '../../graphql/queries'
import { createAAFPHolidayMsgSetup, deleteAAFPHolidayMsgSetup } from "../../graphql/mutations";

const AppDataContext = React.createContext()

const AppDataProvider = ({children}) => {
    const [departments, setDepartments] = useState()
    const [mainData, setMainData] = useState()
    const [holidayData, setHolidayData] = useState()

    const [selectedDepartmentGroupName, setSelectedDepartmentGroupName] = useState()
    const [loading, setLoading] = useState(false)

    //const [formikState, setFormikState] = useState();

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

    const setSelectedDepartment_GroupName = (groupName) => {
        setSelectedDepartmentGroupName(groupName)
    }

    const getMainData = async () => {
        try{
            if(!selectedDepartmentGroupName){
                setSelectedDepartmentGroupName('MRC')
            }
            
            const mainResults = await API.graphql({ 
                query: listAAFPMainSetups,
                variables: { filter: { group_name: { eq: selectedDepartmentGroupName } } },
            });

            mainResults.data
            ? setMainData(mainResults.data.listAAFPMainSetups.items)
            : setMainData([]);
        } catch (e){
            console.log(`Error getMainData: ${JSON.stringify(e)}`)
        }
    };

    useEffect(() => {
        getMainData()
    }, [selectedDepartmentGroupName])

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

    const addHolidayDataListItem = async (newHolidayDataListItem) => {
        try {
            const holidaySetupResult = await API.graphql({
              query: createAAFPHolidayMsgSetup,
              variables: { input: newHolidayDataListItem },
            })

            setHolidayData(previousState => {
                var newHolidayDataState = Object.assign({}, previousState);
                newHolidayDataState.listAAFPHolidayMsgSetups.items.push(holidaySetupResult.data.createAAFPHolidayMsgSetup)
                return newHolidayDataState;
            })

        } catch(e) {
            console.log(`Error in add holiday. ${JSON.stringify(e)}`)
        }

    };

    const deleteHolidayDataListItem = async (deleteListItem) => {
        try {
            const holidayDeleteResult = await API.graphql({
                query: deleteAAFPHolidayMsgSetup,
                variables: { input: deleteListItem },
            })

            // after successfully deleting the record from the db (above), 
            // we must now reset the holiday state by deleting the holiday item
            // with id === deleteListItem. 
            //
            // When the holiday state gets reset, useEffects will cause a rerender
            // thus removing the deleted item from the UI
            // 
            setHolidayData(previousState => {
                var newHolidayDataState = Object.assign({}, previousState)
                const newItems = newHolidayDataState.listAAFPHolidayMsgSetups.items.filter((obj) => obj.id !== deleteListItem.id)
                
                return {...previousState, 
                    listAAFPHolidayMsgSetups: {
                        items: newItems
                    }
                };
            })
        } catch(e) {
            console.log(`Error in add holiday. ${JSON.stringify(e)}`)
        }
    };

    return <AppDataContext.Provider 
        value={{
            loading,
            turnLoadingOn,
            turnLoadingOff,
            toggleLoading,
            useAuthData,
            departments,
            selectedDepartmentGroupName,
            setSelectedDepartment_GroupName,
            mainData,
            holidayData,
            //formikState,
            getDepartments,
            getMainData,
            updateMainData,
            getHolidayData,
            addHolidayDataListItem,
            deleteHolidayDataListItem,
            //setFormikState
        }}
    >
        { children }
    </AppDataContext.Provider>
}

export const useAppDataContext = () => {
    return useContext(AppDataContext)
}

export { AppDataProvider }