import styles from './Skill.module.css'
import SkillCard from '../UI/Landing/SkillCard'

const data = [
    {
        title: 'Frontend Development',
        desc: 'Responsive websites built for an optimal user experience that achieves your business goals.',
    },
    {
        title: 'Backend Development',
        desc: 'Highly Scalable Backend Web Applications using Node JS, mongodb and Express JS.'
    },
    {
        title: 'Full-Stack Development',
        desc: 'I have worked as Full-Stack Developer in various Project.I have experience of working with Frontend  & Backend Languages.'
    }
]
function Skill() {
    return (
        <div className={styles.skillContainer}>
            {data.map(item => (
                <SkillCard skillTitle={item.title}
                    skillDesc={item.desc}
                />
            ))}
        </div>
    )
}

export default Skill
