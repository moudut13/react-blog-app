import "./Post.css"
import {Link} from "react-router-dom";
import * as React from "react";

function Post(){
    return(
        <div className="Post">
            <img className="postImg" src="https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1648982530605-2028ae0c9f7aimage" alt=""/>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Tech</span>
                    <span className="postCat">Computer</span>
                </div>
                <div className="postTitle">
                    <h3><Link className="link" to="/single-post/:postId">Lorem ipsum dolor sit amet.</Link></h3>
                    <hr/>
                </div>
                <span className="postDate">1 Hour Ago</span>
                <div className="postDecs">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, sint, voluptas? Accusantium aliquid, cumque doloribus facilis id illum in magnam odio porro, possimus quod quos sapiente tempore tenetur totam voluptate.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, sint, voluptas? Accusantium aliquid, cumque doloribus facilis id illum in magnam odio porro, possimus quod quos sapiente tempore tenetur totam voluptate.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, sint, voluptas? Accusantium aliquid, cumque doloribus facilis id illum in magnam odio porro, possimus quod quos sapiente tempore tenetur totam voluptate.
                    </p>
                </div>
            </div>

        </div>
    );
}
export default Post;