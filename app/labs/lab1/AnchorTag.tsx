export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/ameymohile/webdev-client" id="wd-github">
        GitHub
      </a>
      <br />
      Where I read tech news:{" "}
      <a href="https://news.ycombinator.com" id="wd-your-link">
        Hacker News
      </a>
      <br />
      <a
        href="https://github.com/ameymohile"
        id="wd-your-github"
        target="_blank"
        rel="noreferrer"
      >
        My GitHub profile
      </a>
      <br />
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        id="wd-ai-link"
      >
        MDN: table element
      </a>
    </>
  );
}
