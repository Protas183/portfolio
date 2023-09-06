import { Link, Outlet } from 'react-router-dom';

export const Skills = () => {
    return (
        <div>
            <img src="https://img.freepik.com/premium-vector/cartoon-funny-little-dog-sitting_29190-6858.jpg" /><br/>
            <Link to="list">My Programmer skills</Link>
            <Outlet />
        </div>
    )
}
