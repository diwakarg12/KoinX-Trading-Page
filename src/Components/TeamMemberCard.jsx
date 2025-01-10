/* eslint-disable react/prop-types */

const TeamMemberCard = ({img, name, designation, about }) => {
  return (
    <div className="md:flex bg-[#E8F4FD] rounded-lg py-4 md:px-8 my-6">
      <div className="justify-center flex flex-col items-center w-9/12">
          <img src={img} className="rounded-xl w-44 lg:w-96" alt="Team Member" />
        <p className="text-[#0F1629] text-[15px] font-semibold py-1">
          {name}
        </p>
        <p className="text-[#788F9B] text-xs font-medium">{designation}</p>
      </div>
      <p className="flex justify-center items-center px-4 ml-4 text-[#0F1629] text-sm font-normal">{about}</p>
    </div>
  )
}

export default TeamMemberCard