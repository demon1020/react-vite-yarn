import React, { FC } from "react";

import { SettingsProps } from "./Settings.props";

const SettingsView: FC<SettingsProps> = (props) => {
  return (
    <div className="p-6 bg-base-100  rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>

      <form onSubmit={() => {}}>
        <div className="mb-4">
          <label className="block text-gray-600">Username</label>
          <input
            type="text"
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
            className="input input-bordered w-full"
          />
          {/* {errors.username && (
            <p className="text-red-500 text-sm">{errors.username}</p>
          )} */}
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Email</label>
          <input
            type="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full"
          />
          {/* {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )} */}
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Password</label>
          <input
            type="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered w-full"
          />
          {/* {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )} */}
        </div>

        <div className="flex gap-10">
          <div className="mb-4">
            <label className="block text-gray-600">Theme</label>
            <input
              type="checkbox"
              // checked={theme === "dark"}
              // onClick={toggleTheme}
              className="toggle toggle-primary"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Notification</label>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              // checked={notifications === "enabled"}
              // onClick={toggleNotifications}
            />
          </div>
        </div>

        {/* {errors.apiError && (
          <p className="text-red-500 text-sm mb-4">{errors.apiError}</p>
        )} */}

        <button
          type="submit"
          className="btn btn-primary w-full"
          // disabled={isLoading}
        >
          {false ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : (
            "Save Changes"
          )}
        </button>
      </form>
    </div>
  );
};

export default SettingsView;
