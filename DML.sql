-- 2025/03/20
-- SELECT COLUMN_NAME, DATA_TYPE, DATA_LENGTH, NULLABLE, DATA_DEFAULT
-- FROM ALL_TAB_COLUMNS WHERE TABLE_NAME = 'CONTACTS';

INSERT INTO CONTACTS (ID, EMAIL, NAME, PHONE, PROFILE_PICTURE_URL)
VALUES (1, 'john.doe@example.com', 'John Doe', '123-456-7890', 'https://randomuser.me/api/portraits/men/1.jpg');
INSERT INTO CONTACTS (ID, EMAIL, NAME, PHONE, PROFILE_PICTURE_URL)
VALUES (2, 'jane.smith@example.com', 'Jane Smith', '987-654-3210', 'https://randomuser.me/api/portraits/women/1.jpg');
INSERT INTO CONTACTS (ID, EMAIL, NAME, PHONE, PROFILE_PICTURE_URL)
VALUES (3, 'michael.lee@example.com', 'Michael Lee', '555-123-4567', 'https://randomuser.me/api/portraits/men/2.jpg');
INSERT INTO CONTACTS (ID, EMAIL, NAME, PHONE, PROFILE_PICTURE_URL)
VALUES (4, 'emily.watson@example.com', 'Emily Watson', '444-987-6543', 'https://randomuser.me/api/portraits/women/2.jpg');
INSERT INTO CONTACTS (ID, EMAIL, NAME, PHONE, PROFILE_PICTURE_URL)
VALUES (5, 'david.brown@example.com', 'David Brown', '333-222-1111', 'https://randomuser.me/api/portraits/men/3.jpg');
COMMIT;

-- SELECT * FROM CONTACTS;
-- TRUNCATE TABLE CONTACTS;

-- 2025/03/21
-- DROP TABLE CONTACTS;
-- DROP SEQUENCE CONTACTS_SEQ;
-- SELECT CONTACTS_SEQ.CURRVAL FROM DUAL;
-- SELECT CONTACTS_SEQ.NEXTVAL FROM DUAL;

-- SELECT sequence_name, last_number
-- FROM user_sequences
-- WHERE sequence_name = 'CONTACTS_SEQ';
