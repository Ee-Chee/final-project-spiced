import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//Important concept: Redux is a global of global variables(or store). It means the data can be accessed everywhere even it is by different .js file.
//There is no need to change state data, so, action is not requestingFriends
//There is a need of passing down data, connect is needed, so that data can be rendered

class OnlineFriends extends React.Component {
    render() {
        const onlineUsers = this.props.allOnlineFriends;
        if (!onlineUsers) {
            return (
                <div className="center">
                    <img
                        src="/circle-loading-gif.gif"
                        height={200}
                        width={200}
                    />
                </div>
            );
        }
        const allOnlineUsers = (
            <div className="content-container">
                <h1>All online Messers</h1>
                <div className="row">
                    {onlineUsers.map(user => (
                        <div className="online-container" key={user.id}>
                            <Link className="online" to={"/user/" + user.id}>
                                <img
                                    src={user.avatarurl}
                                    height={100}
                                    width={100}
                                />
                                <div style={{ color: "#00e6e6" }}>
                                    {user.firstn} {user.lastn}
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        );

        return (
            <div className="content-container">
                {!onlineUsers.length && (
                    <h3>
                        Congratulations you are the only one online! This is
                        unusual, hurry, take a photo of it :D
                    </h3>
                )}
                {!!onlineUsers.length && allOnlineUsers}
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        allOnlineFriends: state.allOnlineFriends
        // && state.allOnlineFriends.filter(user => user.id == )
    };
};

export default connect(mapStateToProps)(OnlineFriends);
