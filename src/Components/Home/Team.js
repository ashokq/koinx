import React from "react";

function Team() {
  const teamData = [
    {
      image: "https://s3-alpha-sig.figma.com/img/4612/91fa/f3f7c54a3f2de230e1912a46193c019c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fucaDFIssV8tq1ER43ewtTW~8ZGR1kdiIPCh8CzpzXbz95JMUeO78-Fe0BphvSTcNJApv6YwK3ZmRJxQWqzxGdjsTH9vLB4W6Q9ehSOIDsY0IQFZK9iARdA~Vi4jWXbwUV-~4URxWPwbOV6zl2WOt~bM3BmwTWNQomB-0OiXP8ey-l4rp-Xvs5g7g6RzoZ976C~YsqokosXtG-cXf-C~ncYCXiHoDV8ic6E5S-QVvT5fUhsRnN~dYwP2XwmfNvLXSO~H5SVI30oA6IJ2FZpggxJW4O62CyAONfWFB-7nIg~fdx-FMFzSItG-A5y3RPBGgD8i8DT6cCjPFpzArFiCXw__",
      name: "John Smith",
      designation: "Designation here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In justo rutrum sit ut fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas.",
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/4316/c574/4cca8e430c2d9f50e72234abc8fd1c0c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=COYH5ykicRH5TRTyGWt4CcAkdYWhK1RWN~XxMWgGU7OjDsjPnhngpd4Ee3crOGADlX~QNkGCRGn3HLVrLsAaLDsCL7n49yR3hj-qU6mdwDdc8aBMx-LQSd8ykOn45F120mm~75J-AABufimRuFVwUMlQAt4sw35Ra7Pn4NoeKDi~4DfTz0b~A9OQjCXL4m2SMuAuw-kljujLRTfmsyyW2n3q~vyC7L-ZvilAM-1fOiGanqQTW7tgMrRO0PPQSZp9fr21fdq2jpH1QbpNuP~zh8p7AcOyROI5r1tVVGKj6nUvjjcTGoJxHbyvV~2smLXt5DaAXXmSNV-njN3oSRJVww__",
      name: "Elina Williams",
      designation: "Designation here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In justo rutrum sit ut fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas.",
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/c5f0/f097/f060c63093179c9aa8c4ce86a8cac7f7?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kvokLtETuJb120WXkkou8gp8JH0S46SvTBb1kl-DcgMKaStLyyrvBDroeSNX4ndXR0J7oy~Lbil0qxs805ipaRYJBvx-WTswOvUg1~cA4mHNLdqblsZ-jpzT1Ikh3wAhLlki2KqDAQ~NwTruZjsklCV1hSRUF~mFna3tzgaDauT19jYNA~8nvTCIsmMcfO33KxSWg5ObB0exCAyAENFC5uwf7m8ZQ5GEMpz2AloWFe-r~VxwNNT6RaoqqJ66IoRDXKjXJj9WqjCXS8i15UROPv2JFEOvBRspfV0-BXOKIiH4B9juLmbypz9a6n7UGrhJtsDJaQL4QaRHjKGGJWBrrQ__",
      name: "John Smith",
      designation: "Designation here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In justo rutrum sit ut fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas.",
    },
  ];

  const containerStyle = {
    backgroundColor: "#FFFFFF", // Blue background
    
    borderRadius: "15px",
    padding: "20px",
    marginTop:"20px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    fontFamily: "Arial, sans-serif",
    
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "0.5rem",
  };

  const descriptionStyle = {
    marginBottom: "1.5rem",
    color: "#555",
    fontSize: "1rem",
  };

  const cardStyle = {
    display: "flex",
    gap: "1rem",
    backgroundColor: "#E8F4FD",
    padding: "1.5rem",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginBottom: "1.5rem",
  };

  const imageStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  const contentStyle = {
    flex: 1,
  };

  const nameStyle = {
    margin: "0",
    fontSize: "1.25rem",
    fontWeight: "bold",
  };

  const designationStyle = {
    margin: "0.25rem 0",
    color: "#666",
    fontSize: "0.875rem",
  };

  const paragraphStyle = {
    margin: "0.5rem 0 0",
    color: "#444",
    fontSize: "0.875rem",
    lineHeight: "1.5",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Team</h2>
      <p style={descriptionStyle}>
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas.
      </p>
      {teamData.map((member, index) => (
        <div key={index} style={cardStyle}>
          <img src={member.image} alt={member.name} style={imageStyle} />
          <div style={contentStyle}>
            <h3 style={nameStyle}>{member.name}</h3>
            <p style={designationStyle}>{member.designation}</p>
            <p style={paragraphStyle}>{member.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Team;
