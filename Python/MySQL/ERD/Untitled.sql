SELECT `messages`.`id`,
    `messages`.`user_id`,
    `messages`.`message`,
    `messages`.`created_at`,
    `messages`.`updated_at`
FROM `luzmila`.`messages`;

SELECT messages.id as msg_id, users.id as user_id, CONCAT(users.first_name, " ", users.last_name) AS name, messages.message, messages.created_at, comments.comment, comments.created_at
FROM `luzmila`.`comments`
LEFT JOIN messages ON messages.id = comments.message_id
LEFT JOIN users ON users.id = messages.user_id
order by message_id desc;

SELECT messages.id as msg_id, users.id as user_id, 
CONCAT(users.first_name, " ", users.last_name) AS name, messages.message, messages.created_at, 
comments.user_id, comments.comment, comments.created_at
FROM messages
LEFT JOIN comments ON messages.id = comments.message_id
LEFT JOIN users ON users.id = comments.user_id
order by message_id desc;




