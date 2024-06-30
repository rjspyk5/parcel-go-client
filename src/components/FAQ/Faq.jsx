import React from "react";

export const Faq = () => {
  return (
    <div>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          How do I book a parcel delivery?
        </div>
        <div className="collapse-content">
          <p>
            To book a parcel delivery, log in to your account, navigate to the
            "Book Parcel" section, fill in the required details such as the
            receiver's address, parcel weight, and type, and confirm your
            booking.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What are the delivery charges?
        </div>
        <div className="collapse-content">
          <p>
            Delivery charges depend on the weight, type, and distance of the
            parcel delivery. You can get an estimate of the delivery charges
            while booking your parcel.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Can I track my parcel?
        </div>
        <div className="collapse-content">
          <p>
            Yes, you can track your parcel by logging in to your account and
            navigating to the "My Parcel" section. Here you will find real-time
            updates on the status and location of your parcel.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How can I cancel a booking?
        </div>
        <div className="collapse-content">
          <p>
            You can cancel a booking if its status is "pending." Go to the "My
            Parcel" section, find the booking you want to cancel, and click on
            the "Cancel" button.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Can I modify the parcel details after booking?
        </div>
        <div className="collapse-content">
          <p>
            Yes, you can modify parcel details such as weight and type after
            booking. Simply log into your account, go to "My Parcels," and
            select the booking you wish to update. Make the necessary changes
            and save the updates.
          </p>
        </div>
      </div>
    </div>
  );
};
