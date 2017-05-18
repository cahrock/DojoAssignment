SELECT * friendship.users
LEFT JOIN friendship.friendships
ON friendship.users.id = friendship.friendships.user_id
LEFT JOIN friendship.users AS friends
ON friendship.friednships.friend_id = friendship.friends.id;