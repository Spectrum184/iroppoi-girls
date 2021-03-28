import { PostDetailSideBar } from "../../components/PostDetailSideBar";
import { PostDetailForm } from "../../components/PostDetailForm";

export default function PostCreate() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <PostDetailForm />
                </div>
                <div className="col-lg-4">
                    <PostDetailSideBar />
                </div>
            </div>
        </div>
    );
}
