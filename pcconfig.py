import pynecone as pc

config = pc.Config(
    app_name="CIT",
    api_url="http://0.0.0.0:54411",
    db_url="sqlite:///CIT.db",
    bun_path="$HOME/.bun/bin/bun",
)