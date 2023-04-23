import pynecone as pc

config = pc.Config(
    app_name="CIT",
    db_url="sqlite:///CIT.db",
    env=pc.Env.DEV,
)