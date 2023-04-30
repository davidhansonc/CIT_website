import pynecone as pc

config = pc.Config(
    app_name="CIT",
    api_url="http://192.168.1.1:8000",
    db_url="sqlite:///CIT.db",
    bun_path="$HOME/.bun/bin/bun",
)