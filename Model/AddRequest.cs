namespace CRUD.API.Model
{
    public class AddRequest
    {
      
        public required string Name { get; set; }
        public required string DoB { get; set; }
        public required string Address { get; set; }
        public required string PhoneNum { get; set; }
    }
}
