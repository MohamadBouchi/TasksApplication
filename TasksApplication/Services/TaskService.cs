using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;
using TasksApplication.Models;

namespace TasksApplication.Services
{
    public class TaskService
    {
        private readonly IMongoCollection<Task> _task;

        public TaskService(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("TaskstoreDb"));
            var database = client.GetDatabase("ToDo");
            _task = database.GetCollection<Task>("tasks");
        }

        public List<Task> Get()
        {
            return _task.Find(task => true).ToList();
        }

        public Task Get(string id)
        {
            return _task.Find<Task>(task => task.Id == id).FirstOrDefault();
        }

        public Task Create(Task task)
        {
            _task.InsertOne(task);
            return task;
        }

        public void Update(string id, Task taskIn)
        {
            _task.ReplaceOne(task => task.Id == id, taskIn);
        }

        public void Remove(Task taskIn)
        {
            _task.DeleteOne(task => task.Id == taskIn.Id);
        }

        public void Remove(string id)
        {
            _task.DeleteOne(task => task.Id == id);
        }
        
    }
}
