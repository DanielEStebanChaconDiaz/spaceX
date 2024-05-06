export const getAllMissions = async()=>{
    let res = await fetch('https://api.spacexdata.com/v3/missions')
    let data = await res.json()
    return data
}