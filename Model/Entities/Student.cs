namespace CRUD.API.Model.Entities
{
    public class Student
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string DoB { get; set; }
        public required string Address { get; set; }
        public required string PhoneNum { get; set; }

    }
}

