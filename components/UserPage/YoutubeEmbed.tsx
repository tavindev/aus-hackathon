interface YoutubeEmbed {
    embedId: string;
}

export const YoutubeEmbed: React.FC<YoutubeEmbed> = ({ embedId }) => (
    <div className="video-responsive mt-8 w-full">
        <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
);
