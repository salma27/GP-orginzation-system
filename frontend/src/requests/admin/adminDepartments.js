export function adminDeleteDepartment (axios,data){
    return axios.post("/admin/department/delete",data);
}