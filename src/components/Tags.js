import '../styles/Tags.scss';

function tagColor(tag) {
  let hue = 0;
  for (let i = 0; i < tag.length; i++)
    hue = Math.imul(31, hue) + tag.charCodeAt(i++) | 0;
  return { backgroundColor: `hsl(${hue}deg 33% 50%)` };
}

export default function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map(tag =>
        <div key={tag} className="tag" style={tagColor(tag)}>
          {tag}
        </div>
      )}
    </div>
  );
};
