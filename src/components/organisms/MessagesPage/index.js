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
    getMessages = () => {},
    sendMessage = () => {},
    resetSendMessageCompleted = () => {},
    sendMessageCompleted = false,
    incomingMessageDeleteComplete = false,
    incomingMessageDelete = () => {},
    resetIncomingMessageDeleteComplete = () => {},

    outgoingMessageDeleteComplete = false,
    outgoingMessageDelete = () => {},
    resetOutgoingMessageDeleteComplete = () => {}
}) => {
    const [messageVisible, setMessageVisible] = useState(false);
    const [messageContentVisible, setMessageContentVisible] = useState(false);

    const [userMeVisible, setUserMeVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('inbox');
    const [userId, setUserId] = useState();
    const [newMessage, setNewMessage] = useState();
    const [username, setUsername] = useState();

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
        resetSendMessageCompleted();
        getMessageLogs();
        getOutGoingMessageLogs();
    },[]);

    useEffect(() => {
        if(incomingMessageDeleteComplete) {
            resetIncomingMessageDeleteComplete();
            getMessageLogs();
        }
    },[incomingMessageDeleteComplete]);

    useEffect(() => {
        if(outgoingMessageDeleteComplete) {
            resetOutgoingMessageDeleteComplete();
            getOutGoingMessageLogs();
        }
    },[outgoingMessageDeleteComplete]);

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

    useEffect(() => {
        if(sendMessageCompleted) {
            getMessages({ userId: userId });
        }
    },[sendMessageCompleted]);

    const handleSendMessage = () => {
        sendMessage({
            receiverId: userId,
            message: newMessage
        });
        resetSendMessageCompleted();
        setNewMessage("");
    }

    const inboxMenuOnClick = (user) => {
        setUserId(user?.sender?.id);
        setUsername(user?.sender?.username)
    }

    const deleteIncomingMessage = (user) => {
        incomingMessageDelete({ senderId: user?.sender?.id });
    }

    const deleteOutgoingMessage = (user) => {
        outgoingMessageDelete({ receiverId: user?.receiver?.id });
    }

    const goingMenuOnClick = (user) => {
        setUserId(user?.receiver?.id);
        setUsername(user?.receiver?.username)
    }

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
                                                <div key={user?.sender?.id} className={styles.userItem}>
                                                    <div onClick={() => inboxMenuOnClick(user)} 
                                                        style={{ width: '90%'}}>
                                                        {user.sender?.username}
                                                    </div>
                                                    <div style={{ marginLeft: 'auto', width: '10%'}} onClick={() => deleteIncomingMessage(user)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M9 3V4H4V6H5V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V6H20V4H15V3H9M7 6H17V19H7V6Z" />
                                                        </svg>
                                                    </div>

                                                </div>
                                            ))}
                                        </>
                                    ) : (
                                        <>
                                            {outGoingMessageLogs.map(user => (
                                                <div key={user?.receiver?.id} className={styles.userItem}>
                                                    <div onClick={() => goingMenuOnClick(user)} style={{ width: '90%'}}>
                                                        {user.receiver?.username}
                                                    </div>
                                                    <div style={{ marginLeft: 'auto', width: '10%'}} onClick={() => deleteOutgoingMessage(user)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M9 3V4H4V6H5V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V6H20V4H15V3H9M7 6H17V19H7V6Z" />
                                                        </svg>
                                                    </div>
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
                                            <div className={styles.usernameEpisode}>
                                                <label>{username}</label>
                                            </div>
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

                                {/* 💬 Mesaj Gönderme Alanı */}
                                <div className={styles.messageInputContainer}>
                                    <input
                                        type="text"
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        className={styles.messageInput}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" && newMessage.trim()) {
                                                handleSendMessage();
                                            }
                                        }}
                                        placeholder="Mesajınızı yazın..."
                                    />
                                    <button
                                        className={styles.sendButton}
                                        onClick={handleSendMessage}
                                    >
                                        Gönder
                                    </button>
                                </div>
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