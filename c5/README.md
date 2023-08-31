### Автентикација

    - Утврдување на автентичност, идентитет.
    - Процес во кој верифицираме дали некој е тој што тврди дека е. Пр. верификација на личност со покажување лична карта
    Пр. Најава на Фејсбук со емаил и лозинка

### Авторизација

    - Дозвола, привилегија за извршување одредени функции.
    - Процес на верифицирање на корисникот дали има привилегии да пристапи одредени апликации, директориуми, фајлови и слично. Пр. Корисник кој може да ги види своите белешки на телефонот, пред тоа го вклучил телефонот со помош на face id или finger id (се автентицира).

### Хеширање и bcrypt

    - password = "test"
    - salt - znaci random vrednosti
    f("test") * salt = aifojaoefj9834t94hgiureidnjgijdn

    test = aifojaoefj9834t94hgiureidnjgijdn

    - Процес:
        Plain text -> Hashing Algorithm (bcrypt) -> Hashed text
    - Алгоритам - Blowfish cipher algorithm
    - Ќе го користиме за да ја потврдиме лозинката

### JWT - JSON Web Token

    - Се користи за безбедна комуникација помеѓу клиент сервер, како JSON објект.
    - JWT е дигитално потпишан
    - Може да користи алгоритам како HMAC за приватни клучеви
    - Или приватни/јавни клучеви како RSA, ECDSA.
    - Структура
        ex. xxxxx.yyyyy.zzzzz
        1. Header
            - type of token
            - algorithm used
            ex. { "typ": "JWT", alg: "HS256" }
        2. Payload
            - Содржи claims. Claims се изјави за некој ентитет (пр. за корисникот) и дополнителни податоци.
            - Три типови на claims:
                1. registered
                2. private
                3. public
                ex. {
                        "sub": "1234567890",
                        "name": "John Doe",
                        "admin": true
                    }
        3. Signature - го зема енкодираниот header, payload и secret и прави потпис на следниот начин
            - HMACSHA256(base64UrlEncode(header) + "." +base64UrlEncode(payload),secret)
            - Потписот ни служи за да се осигураме дека оригиналната порака не била променета на пат кон крајниот корисник

### Packets

    - bcryptjs
    - node-input-validator
    - express
    - mongoose
    - jsonwebtoken
    - express-jwt
