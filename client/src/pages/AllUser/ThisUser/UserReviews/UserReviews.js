import React, { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import UserAllReview from "./UserAllReview/UserAllReview";
import ContentService from "../../../../services/content.service";

export default function UserReviews() {
  const { userId } = useParams();
  const [userAllReviews, setUserAllReviews] = useState([]);

  useEffect(() => {
    getAllReviews(userId);
  }, [userId]);

  const getAllReviews = (_id) => {
    ContentService.getReviewByUserId(_id)
      .then((data) => {
        setUserAllReviews(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <section className="archive">
        <div>
          {userAllReviews &&
            userAllReviews.map((ur) => {
              return <UserAllReview key={ur.id} review={ur} />;
            })}
        </div>
      </section>
      <Outlet />
    </div>
  );
}
