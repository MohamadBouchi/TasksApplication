using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TasksApplication.Models
{
    public class Task
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("title")]
        public string Title { get; set; }

        [BsonElement("description")]
        public string Description { get; set; }

        [BsonElement("date")]
        public BsonDateTime Date { get; set; }
    }
}
