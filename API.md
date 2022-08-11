# API 명세서

## 💡 인증

### [회원가입]

#### <span style="color:red">POST</span> /auth/signup

```javascript
req: {
	userId: string,
	email: string,
	username: string,
	phoneNumber: string,
	gender: 'MAIL' | 'FEMAIL',
	password: string
}

res: {
	id: number,
	userId: string,
	email: string,
	username: string,
	phoneNumber: string,
	gender: 'MAIL' | 'FEMAIL',
	password: string (hashed)
	currentHashedRefreshToken: string
}
```

### [로그인]

#### <span style="color:red">POST</span> /auth/signin

```javascript
req: {
	userId: string,
	password: string
}

res: {
	accessToken: string,
	refreshToken: string,
	userInfo: {
	    id: number,
	    userId: string,
	    email: string,
	    username: string,
	    phoneNumber: string,
	    gender: 'MAIL' | 'FEMAIL',
	    currentHashedRefreshToken: null
	}
}
```

### [Access Token 재발급]

#### <span style="color:red">GET</span> /auth/refresh

```javascript
req: {
	refreshToken: string
}
res: {
	accessToken: string
	user: {
		id: number,
		userId: string,
		email: string,
		username: string,
		phoneNumber: string,
		gender: 'MAIL' | 'FEMAIL',
		created_at: string
	}
}
```

### [유저정보 조회]

#### <span style="color:orange">GET</span> /auth/profile

```javascript
res: {
	id: number,
    userId: string,
    email: string,
    username: string,
    phoneNumber: string,
    gender: 'MAIL' | 'FEMAIL',
    created_at: string,
	boards: [
        {
            id: number,
            title: string,
            content: string,
            status: "PRIVATE" | "PUBLIC",
            created_at: string,
            comments: []
        }, ...
    ],
	comments: [
        {
            id: number,
            content: string,
            created_at: string,
        },
        ...
    ]
}
```

### [아이디 중복 체크]

#### <span style="color:orange">GET</span> /auth/idRedundancyCheck

```javascript
req: {
  userId: string;
}

res: {
  boolean;
}
```

### [로그아웃]

#### <span style="color:red">POST</span> /auth/logout

```javascript
req: {
}
res: {
}
```

## 💡 게시글

### [게시글 작성]

#### <span style="color:red">POST</span> /boards

```javascript
req: {
	title: string,
	content: string
}

res: {
	id: number,
	title: string,
	content: string,
	status: "PRIVATE" | "PUBLIC",
	created_at: string,
	user: {...}
}
```

### [모든 게시글 조회]

#### <span style="color:orange">GET</span> /boards

```javascript
res: {
	[
		{
			id: number,
			title: string,
			content: string,
			status: "PRIVATE" | "PUBLIC",
			created_at: string,
			user: {
				id: number,
                userId: string,
				email: string,
                username: string
			},
			comments: [...],
            goodList: [...]
		},
		...
	]
}
```

### [특정 게시글 조회]

#### <span style="color:orange">GET</span> /boards/:id

```javascript
req: {
    boardId: number
}
res: {
	id: number,
	title: string,
	content: string,
	status: "PRIVATE" | "PUBLIC",
	created_at: string,
	user: {
		id: number,
		email: string
	},
	comments: []
}
```

### [게시글 수정]

#### <span style="color:purple">PATCH</span> /boards/:id

```javascript
req: {
	title: string,
	content: string,
	status: "PRIVATE" | "PUBLIC"
}

res: {
	id: number,
	title: string,
	content: string,
    status: "PRIVATE" | "PUBLIC",
    created_at: string,
    comments: []
}
```

### [게시글 삭제]

#### <span style="color:black">DELETE</span> /boards/:id

```javascript
req: {
}
res: {
}
```

## 💡 댓글

### [댓글 작성]

#### <span style="color:red">POST</span> /comments

```javascript
req: {
	boardId: string,
	_content: string
}
res: {
	id: number,
	content: string,
	created_at: string,
	user: {
		id: number,
		userId: string,
		email: string,
		username: string
	}
	board: {
		id: number
	}
}
```

### [특정 게시글의 댓글 조회]

#### <span style="color:orange">GET</span> /comments/board/:id

```javascript
req: {
    boardId: number
}
res: {
	[
        {
            id: number,
            content: string,
            created_at: string,
            user: {
                id: number,
                userId: string,
                email: string,
                username: string
            }
            board: {
                id: number
            },
        },
        ...
	]
}
```

## 💡 좋아요

### [좋아요]

#### <span style="color:red">POST</span> /good

```javascript
req: {
  boardId: string;
}
res: {
}
```
