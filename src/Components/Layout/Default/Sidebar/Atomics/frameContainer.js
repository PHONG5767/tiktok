import { Link } from "react-router-dom";
import styles from "../sidebar.module.scss";
import { PrimaryButton } from "~/Components/Button";

function UserContainer(){
    return (
        <>
        <div className="framerContent"><span>Đăng nhập để follow các tác giả, thích video và xem bình luận.</span></div>
        <PrimaryButton large>Đăng nhập</PrimaryButton>
        </>
    )
}
export default UserContainer