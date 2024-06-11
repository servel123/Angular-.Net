using CRUD.API.Model.Entities;
using CRUD.API.Model;
using CRUD_ASP.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CRUD.API.Repository;

namespace CRUD.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Student1Controller : ControllerBase
    {
       
        private readonly StudentRepository _studentRepository;

        
        [HttpGet]
        public async Task<ActionResult> GetAllStudent()
        {
            var Studentlist = await _studentRepository.GetAllStudentAsync();
            return Ok(Studentlist);
        }
        [HttpPost]

        public async Task<ActionResult> AddStudent([FromBody]Student model)
        {
            await _studentRepository.AddStudentAsync(model);
            return Ok(model);
        }

        public Student1Controller(StudentRepository studentRepository)
        {
            _studentRepository = studentRepository;
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult> GetStudentById([FromRoute] int Id) {
            var student = await _studentRepository.GetStudentById(Id);
            return Ok(student);
        }
        [HttpPut("{Id}")]
        public async Task<ActionResult> UpdateStudent([FromRoute] int Id, [FromBody] Student model)
        {
            await _studentRepository.UpdateStudent(model,Id) ;
            return Ok();
        }
        [HttpDelete("{Id}")]
        public async Task<ActionResult> DeleteStudent([FromRoute] int Id)
        {
            await _studentRepository.DeleteStudent(Id);
            return Ok();
        }
    }
}
