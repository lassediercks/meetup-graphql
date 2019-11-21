module.exports = {
  typeDefs: `
       
        type Meetup{
            """
            OOUX-Metadata
            """
            name: String
            topic: String
            talks: [Talk]
            date: String
            time: String
            location: String
        }

        type Attendee{
            name: String
            picture: String
            role: String
            company: Company
        }

        type Company{
            adress: String
            name: String
            industry: String
        }

        type Talk{
            name: String
        }

        type Query{
            allMeetups: [Meetup]
        }
    `
};
