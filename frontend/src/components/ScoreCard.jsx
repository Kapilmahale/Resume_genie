function ScoreCard({ title, value }) {

    return (
        <div className="bg-slate-900 rounded-xl p-6 shadow">

            <h3 className="text-slate-400"> {title} </h3>
            <p className="text-4xl font-bold mt-3 text-blue-500"> {value} </p>
        </div>

    );

}

export default ScoreCard;