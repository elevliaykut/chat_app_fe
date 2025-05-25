import React, { useEffect, useState } from "react";
import styles from './Index.module.css';

const MessageModal = ({
    onClose = () => {},
    isLoading = false,
    messages = [],
    messageIsLoaing = false,
    sendMessage = () => {},
    resetSendMessageCompleted = () => {},
    userMe = {},
    selectedMessageUserId = () => {},
    selectedUsername = "",
    selectedUserStatus = false
}) => {
    const [newMessage, setNewMessage] = useState();
    const [messageContentVisible, setMessageContentVisible] = useState(false);


    useEffect(() => {
        if(messageIsLoaing) {
            setMessageContentVisible(true);
        }
    },[messageIsLoaing]);
    
    const handleSendMessage = () => {
        sendMessage({
            receiverId: selectedMessageUserId,
            message: newMessage
        });
        resetSendMessageCompleted();
        setNewMessage("");
    }

    return (
        <>
            <div className={styles.overlay}>
                <div className={styles?.modal}>
                    <div className={styles?.modalHeader}>
                        <div>
                            <label>{selectedUsername} {selectedUserStatus ?? ' - Çevrimiçi'}</label>
                        </div>
                        <div style={{ marginLeft: 'auto', cursor: 'pointer'}} onClick={onClose}>
                            X
                        </div>
                    </div>
                    <div className={styles?.modalContent}>
                        
                    <div className={styles.messageContent}>
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
                    </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
};

export default MessageModal;