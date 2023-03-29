interface IAdmin{
    name: string,
    dependencies: string[]
}

interface IUser{
    name: string,
    startDate: Date
}

// type AdminUser = IAdmin & IUser 

interface AdminUser extends IAdmin, IUser{}