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
    selectedUserStatus = false,
    isThatActive = false
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
                        
                        {isThatActive ? (
                            <>
                                <div className={styles.messageContent}>
                                    {messages.length > 0 ? (
                                                <>
                                                    <div className={styles.messages}>
                                                        {messages.map((msg) => {
                                                            const isMe = msg.sender?.id === userMe?.id;

                                                            // Tarihi formatla
                                                            const formattedDate = new Date(msg.created_at).toLocaleString('tr-TR', {
                                                            dateStyle: 'short',
                                                            timeStyle: 'short',
                                                            });

                                                            return (
                                                            <div
                                                                key={msg.id}
                                                                className={`${styles.messageItem} ${isMe ? styles.outgoing : styles.incoming}`}
                                                            >
                                                                <div>{msg.message}</div>
                                                                <div className={styles.messageDate}>{formattedDate}</div>
                                                            </div>
                                                            );
                                                        })}
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
                            </>
                        ) : (
                            <>
                                <div style={{ textAlign: 'center'}}>
                                    <h1 style={{ fontSize: '18px', paddingBottom: '20px'}}>Mesajlaşmaya başlamak için hemen Altın üye olun!</h1>
                                    <button style={{ width: '250px', textAlign: 'center', marginBottom: '20px'}} onClick={() => window.location = '/payment'}>HEMEN PAKETİNİ SEÇ</button>
                                    <label style={{ fontSize: '16px', paddingBottom: '10px', fontWeight: 400}}> - 7/24 sınırsız mesajlaşma</label>
                                    <label style={{ fontSize: '16px', paddingBottom: '10px', fontWeight: 400}}> - Üyelerle sınırsız etkileşim</label>
                                    <label style={{ fontSize: '16px', paddingBottom: '10px', fontWeight: 400}}> - Avantajlı hediye alma</label>
                                    <label style={{ fontSize: '16px', paddingBottom: '10px', fontWeight: 400}}> - Avantajlı ŞANSINI ARTIR gösterimi</label>
                                    <label style={{ fontSize: '16px', paddingBottom: '10px', fontWeight: 400}}> - Aramalarda üst sıralarda yer alma</label>
                                </div>
                            </>
                        )}
                    </div>
                    
                </div>
            </div>
        </>
    )
};

export default MessageModal;