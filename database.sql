INSERT INTO "forum_thread"(title, description, author_id, timestamp, category_id, views )
VALUES ('What do you guys think?', 'What do you think of this project?', 2, '2021-02-21 13:04:25-04' , 3, 0);

INSERT INTO "forum_thread"(title, description, author_id, timestamp, category_id, views )
VALUES ('Is this even working?', 'Im not sure if this site is working..', 3, '1999-01-14 15:04:15-04' , 4, 0);

INSERT INTO "user" (username, password, join_date, messages, access_level)
VALUES ('Traizel', '123', '2021-02-20', 0, 2);

INSERT INTO "user" (username, password, join_date, messages, access_level)
VALUES ('Some Guy', '234', '2021-02-21', 0, 1);

INSERT INTO "forum_category"(title, description, author_id)
VALUES ('General Discussion', 'Talk about anything here!', 2);

INSERT INTO "forum_category"(title, description, author_id)
VALUES ('Off Topic', 'Just Off topic Stuff', 2);

INSERT INTO "forum_comments"(text, timestamp, author_id, thread_id)
VALUES ('This is a great project! Love it!', '2021-02-21 14:04:25-04', 2, 4);

INSERT INTO "forum_comments"(text, timestamp, author_id, thread_id)
VALUES ('Could be more stylish..', '2021-02-21 14:34:22-04', 2, 4);

INSERT INTO "forum_comments"(text, timestamp, author_id, thread_id)
VALUES ('Im loving it!', '2021-02-20 09:12:23-02', 2, 4);

INSERT INTO "forum_comments"(text, timestamp, author_id, thread_id)
VALUES ('Yes.. It is working..', '2021-01-16 09:12:23-02', 2, 5);

INSERT INTO "forum_comments"(text, timestamp, author_id, thread_id)
VALUES ('Sorry for responding 22 years late..', '2021-01-16 09:15:23-02', 2, 5);


CREATE TABLE "user" (
	"id" serial NOT NULL,
	"username" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	"join_date" DATE NOT NULL,
	"access_level" integer NOT NULL,
	"messages" integer NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "event" (
	"id" serial NOT NULL,
	"title" TEXT NOT NULL,
	"start_time" TIME NOT NULL,
	"description" TEXT NOT NULL,
	"author_id" integer NOT NULL,
	CONSTRAINT "event_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "news" (
	"id" serial NOT NULL,
	"title" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	"author_id" integer NOT NULL,
	CONSTRAINT "news_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "forum_thread" (
	"id" serial NOT NULL,
	"title" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	"views" integer NOT NULL,
	"author_id" integer NOT NULL,
	"timestamp" TIMESTAMP NOT NULL,
	"category_id" integer NOT NULL,
	CONSTRAINT "forum_thread_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "forum_category" (
	"id" serial NOT NULL,
	"title" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	"author_id" integer NOT NULL,
	CONSTRAINT "forum_category_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "forum_comments" (
	"id" serial NOT NULL,
	"text" TEXT NOT NULL,
	"author_id" integer NOT NULL,
	"timestamp" TIME NOT NULL,
	"thread_id" integer NOT NULL,
	CONSTRAINT "forum_comments_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "event" ADD CONSTRAINT "event_fk0" FOREIGN KEY ("author_id") REFERENCES "user"("id");

ALTER TABLE "news" ADD CONSTRAINT "news_fk0" FOREIGN KEY ("author_id") REFERENCES "user"("id");

ALTER TABLE "forum_thread" ADD CONSTRAINT "forum_thread_fk0" FOREIGN KEY ("author_id") REFERENCES "user"("id");
ALTER TABLE "forum_thread" ADD CONSTRAINT "forum_thread_fk1" FOREIGN KEY ("category_id") REFERENCES "forum_category"("id");

ALTER TABLE "forum_category" ADD CONSTRAINT "forum_category_fk0" FOREIGN KEY ("author_id") REFERENCES "user"("id");

ALTER TABLE "forum_comments" ADD CONSTRAINT "forum_comments_fk0" FOREIGN KEY ("author_id") REFERENCES "user"("id");
ALTER TABLE "forum_comments" ADD CONSTRAINT "forum_comments_fk1" FOREIGN KEY ("thread_id") REFERENCES "forum_thread"("id");
