const ReferralMarket = () => {
  const tasks = [
    { title: 'Join Telegram Channel', reward: '1000 $COINS', link: '#' },
    { title: 'Subscribe to YouTube', reward: '2 WBUX', link: '#' },
  ]

  return (
    <div>
      <ul>
        {tasks.map((task, i) => (
          <li key={i} className="mb-2">
            <a href={task.link} target="_blank" rel="noreferrer" className="underline">{task.title}</a> – Reward: {task.reward}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ReferralMarket