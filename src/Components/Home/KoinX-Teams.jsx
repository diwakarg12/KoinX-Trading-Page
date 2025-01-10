import TeamMemberCard from "../TeamMemberCard"

const KoinXTeams = () => {
  return (
    <div className='bg-white h-max rounded-lg mt-5 lg:p-6 p-3'>
        <h2 className="text-2xl font-semibold text-[#0F1629]">Teams</h2>
        <p className="text-[#3E424A] text-[16px] font-medium my-4 pt-2">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </p>
        <TeamMemberCard
        name={"John Smith"}
        designation={"Designation here"}
        img={"/teamMember1.png"}
        about={"Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec nequesed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor estipsum. Malesuada etiam mi gravida praesent interdu"}
        />
        <TeamMemberCard
        name={"Elina Williams"}
        designation={"Designation here"}
        img={"/teamMember2.png"}
        about={"Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec nequesed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor estipsum. Malesuada etiam mi gravida praesent interdu"}
        />
        <TeamMemberCard
        name={"John Smith"}
        designation={"Designation here"}
        img={"/teamMember3.png"}
        about={"Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec nequesed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor estipsum. Malesuada etiam mi gravida praesent interdu"}
        />
    </div>
  )
}

export default KoinXTeams