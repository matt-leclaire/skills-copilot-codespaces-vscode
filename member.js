function skillsMember(member) {
    // Assuming 'member' is an object containing information about a member, such as their name and skills
    if (!member || !member.skills || !Array.isArray(member.skills)) {
        console.log('Invalid member data');
        return;
    }

    console.log(`Skills for ${member.name}:`);

    member.skills.forEach(skill => {
        console.log(`- ${skill}`);
    });

    // Optionally, you might want to return the skills in a formatted way
    return member.skills.map(skill => skill.toLowerCase()).join(', ');
}

// Example usage:
const member = {
    name: 'John Doe',
    skills: ['JavaScript', 'HTML', 'CSS', 'React']
};

skillsMember(member);