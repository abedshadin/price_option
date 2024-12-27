import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const PriceOptionsList = [
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 29.99,
          "duration": "Monthly",
          "features": [
            "Access to gym equipment",
            "Locker access",
            "1 group fitness class per week"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 49.99,
          "duration": "Monthly",
          "features": [
            "Access to gym equipment",
            "Locker access",
            "Unlimited group fitness classes",
            "Access to sauna and steam room"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 69.99,
          "duration": "Monthly",
          "features": [
            "Access to gym equipment",
            "Locker access",
            "Unlimited group fitness classes",
            "Access to sauna and steam room",
            "1 personal training session per month",
            "Priority booking for classes"
          ]
        },
        {
          "id": 4,
          "name": "Annual Membership",
          "price": 499.99,
          "duration": "Yearly",
          "features": [
            "Access to gym equipment",
            "Locker access",
            "Unlimited group fitness classes",
            "Access to sauna and steam room",
            "4 personal training sessions per year",
            "Priority booking for classes"
          ]
        },
        {
          "id": 5,
          "name": "Student Plan",
          "price": 19.99,
          "duration": "Monthly",
          "features": [
            "Access to gym equipment",
            "Locker access",
            "1 group fitness class per week",
            "Discounts on personal training sessions"
          ]
        }
      ]
      
    return (
        <div>
            <h1>Best Price</h1>
            {PriceOptionsList.map((option) => (        
             <PriceOption key={option.id} option={option} />
            ))}
        </div>
    );
};

export default PriceOptions;