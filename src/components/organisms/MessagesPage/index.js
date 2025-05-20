import React, { useEffect, useState } from "react";
import TopBanner from "../../molecules/TopBanner";
import styles from './Index.module.css';

const MessagesPage = ({
    getUserMe = () => {},
    userLogout = () => {},
    getNotifications = () => {},
    notifications = {},
    userMe = {},
    userMeLoading = false,
    notificationIsLoading = false,
    getMessageLogs = () => {},
    messageLogs = [],
    getOutGoingMessageLogs = () => {},
    outGoingMessageLogs = [],
    messageIsLoading = false,
    messages = [],
    getMessages = () => {}
}) => {
    const [messageVisible, setMessageVisible] = useState(false);
    const [messageContentVisible, setMessageContentVisible] = useState(false);

    const [userMeVisible, setUserMeVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('inbox');
    const [userId, setUserId] = useState();

    useEffect(() => {
        if(messageIsLoading) {
            setMessageContentVisible(true);
        }
    },[messageIsLoading]);

    useEffect(() => {
        getUserMe();
        getNotifications({ read: false });
    },[]);

    useEffect(() => {
        if(!userMeLoading) {
            setUserMeVisible(true);
        }
    },[userMeLoading]);

    useEffect(() => {
        getMessageLogs();
        getOutGoingMessageLogs();
    },[]);

    useEffect(() => {
        if(!notificationIsLoading) {
            setMessageVisible(true);
        }
    },[notificationIsLoading]);

    useEffect(() => {
        if(userId) {
            getMessages({ userId: userId });
        }
    },[userId]);

    return (
        <>
            <TopBanner
                onlineMemberCount={userMe?.online_member_count}
                messageCount={userMe?.message_count}
                profileVisible={userMeVisible}
                userLogout={userLogout}
                notifications={notifications}
                notificationIsLoading={notificationIsLoading}
            />

            <div className={styles.frame}>
                <div className={styles.content}>
                    
                    <div className={styles.sidebar}>
                        <div className={styles.tabs}>
                            <button
                                className={activeTab === 'inbox' ? styles.active : ''}
                                onClick={() => setActiveTab('inbox')}
                            >
                                Gelen Mesajlar
                            </button>
                            <button
                                className={activeTab === 'sent' ? styles.active : ''}
                                onClick={() => setActiveTab('sent')}
                            >
                                Giden Mesajlar
                            </button>
                        </div>

                        {messageVisible && (
                            <>
                                <div className={styles.userList}>
                                    {activeTab === 'inbox' ? (
                                        <>
                                            {messageLogs.map(user => (
                                                <div key={user?.sender?.id} className={styles.userItem} onClick={() => setUserId(user?.sender?.id)}>
                                                    {user.sender?.name} { } {user?.sender?.surname}
                                                </div>
                                            ))}
                                        </>
                                    ) : (
                                        <>
                                            {outGoingMessageLogs.map(user => (
                                                <div key={user?.receiver?.id} className={styles.userItem} onClick={() => setUserId(user?.receiver?.id)}>
                                                    {user.receiver?.name} { } {user?.receiver?.surname}
                                                </div>
                                            ))}
                                        </>
                                    )}
                                    
                                </div>
                            </>
                        )}
                    </div>
                    
                    <div className={styles.messageContent}>
                        {messageContentVisible ? (
                            <>
                                {messages.length > 0 ? (
                                    <>
                                        <div className={styles.messages}>
                                            {messages.map(msg => (
                                                <div key={msg.id} className={`${styles.messageItem} ${ msg.sender?.id === userMe?.id ? styles.outgoing : styles.incoming}`}>
                                                    {msg.message}
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className={styles.placeholder}>Henüz mesaj yok.</div>
                                    </>
                                )}
                            </>
                        ) : (
                            <>
                                <div className={styles.placeholder}>Bir kullanıcı seçin.</div>
                            </>
                        )}
                    </div>
                </div>
            </div>    
        </>
    )
}
export default MessagesPage;